import { CombatStrategy, Task } from "grimoire-kolmafia";
import {
  canadiaAvailable,
  changeMcd,
  currentMcd,
  gnomadsAvailable,
  haveEffect,
  mpCost,
  myMp,
  restoreMp,
} from "kolmafia";
import { $effect, $effects, $item, $location, $skill, have, uneffect } from "libram";

import { Macro } from "../../../lib/combat";
import { getEquipment } from "../../../lib/equipment";
import { selectDropFamiliar } from "../../../lib/familiar";
import { ScoboPartType, ScoboParts } from "./parts";

const elementMap = {
  hot: $effects`Spirit of Cayenne`,
  cold: $effects`Spirit of Peppermint`,
  stench: $effects`Spirit of Garlic`,
  spooky: $effects`Spirit of Wormwood`,
  sleaze: $effects`Spirit of Bacon Grease`,
  normal: [],
};

export class Explore {
  parts: ScoboParts;
  targetElement: ScoboPartType = "normal";
  nextFightPrepped = false;
  baseTask = {
    do: () => {
      this.nextFightPrepped = false;
      return $location`Hobopolis Town Square`;
    },
    post: () => this.parts[this.targetElement]++,
    choices: {
      200: 0,
      225: 3,
      230: 2,
      272: 2,
    },
  };

  constructor(parts: ScoboParts) {
    this.parts = parts;
  }

  getTasks(): Task[] {
    return [
      {
        name: "Set Mind Control Device",
        ready: () => canadiaAvailable() || gnomadsAvailable() || have($item`detuned radio`),
        completed: () => currentMcd() === 0,
        do: () => changeMcd(0),
      },
      {
        name: "Prep hobo fight",
        completed: () => this.nextFightPrepped,
        do: () => {
          this.targetElement = Object.keys(this.parts).find(
            (elem) => this.parts[elem as ScoboPartType] < 1,
          ) as ScoboPartType;
          const targetMp =
            mpCost($skill`Curse of Weaksauce`) +
            mpCost($skill`Stuffed Mortar Shell`) +
            mpCost($skill`Weapon of the Pastalord`);
          if (myMp() < targetMp) {
            restoreMp(targetMp);
          }
          this.nextFightPrepped = true;
        },
      },
      {
        ...this.baseTask,
        name: "Hobo combat physical",
        prepare: () => {
          for (const effect of $effects`Spirit of Cayenne, Spirit of Peppermint, Spirit of Garlic, Spirit of Wormwood, Spirit of Bacon Grease`) {
            if (haveEffect(effect)) {
              uneffect(effect);
            }
          }
        },
        completed: () => this.targetElement !== "normal",
        combat: new CombatStrategy().autoattack(Macro.attackKill()),
        effects: [$effect`Carol of the Bulls`],
        outfit: {
          equip: getEquipment([$item`mafia thumb ring`]),
          modifier: "weapon dmg",
          bonuses: new Map([
            [$item`Fourth of May Cosplay Saber`, 300],
            [$item`June cleaver`, 299],
            [$item`Space Trip safety headphones`, 200],
            [$item`HOA regulation book`, 200],
            [$item`pine cone necklace`, 100],
          ]),
          familiar: selectDropFamiliar(),
        },
      },
      {
        ...this.baseTask,
        name: "Hobo combat elemental",
        completed: () => this.targetElement === "normal",
        effects: () => elementMap[this.targetElement],
        combat: new CombatStrategy().autoattack(Macro.mortarShell()),
        outfit: {
          equip: getEquipment([$item`mafia thumb ring`]),
          modifier: "spell dmg",
          bonuses: new Map([
            [$item`Space Trip safety headphones`, 200],
            [$item`HOA regulation book`, 200],
            [$item`pine cone necklace`, 100],
          ]),
          familiar: selectDropFamiliar(),
        },
      },
    ];
  }
}
