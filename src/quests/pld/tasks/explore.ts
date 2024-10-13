import { CombatStrategy, Task } from "grimoire-kolmafia";
import { getProperty, print, visitUrl } from "kolmafia";
import { $effect, $item, $location, AprilingBandHelmet, have } from "libram";

import { Macro } from "../../../lib/combat";
import { getEquipment } from "../../../lib/equipment";
import { selectWorstFamiliar } from "../../../lib/familiar";
import { capCombat } from "../../../lib/preparepluscom";
import { clubPopularityFromRaidlog, roughHoboRemnant } from "../../../lib/raidlog";

export class Explore {
  clubAdventures = 0;
  sleazeHobosLeft = 490;
  doneWithPLD = false;

  baseTask = {
    do: () => $location`The Purple Light District`,
    post: () => {
      if (["Van, Damn", "This Van's a' Rockin'"].includes(getProperty("lastEncounter"))) {
        this.doneWithPLD = true;
        print("Chester waits. He waits. He waits. He waits. He waits.", "purple");
      }
      const raidlog = visitUrl("clan_raidlogs.php");
      this.clubAdventures = clubPopularityFromRaidlog(raidlog);
      this.sleazeHobosLeft = roughHoboRemnant(raidlog);
    },
    prepare: () => {
      if (this.sleazeHobosLeft >= 20) {
        capCombat();
      }
    },
    outfit: () => ({
      equip: getEquipment([$item`mafia thumb ring`]),

      modifier: "+combat, weapon dmg, sleaze res, 0.05 hp",
      //bonuses: new Map([[$item`mafia thumb ring`, 500]]),
      familiar: selectWorstFamiliar(),
    }),
    completed: () => this.doneWithPLD,
    combat: new CombatStrategy().autoattack(Macro.attackKill()),
  };

  getTasks(): Task[] {
    return [
      {
        name: `Conduct Apriling Band Battle Cadence`,
        ready: () => AprilingBandHelmet.canChangeSong(),
        completed: () => have($effect`Apriling Band Battle Cadence`),
        do: () => AprilingBandHelmet.changeSong("Apriling Band Battle Cadence"),
      },
      {
        ...this.baseTask,
        ready: () => this.clubAdventures < 21,
        name: "Purple it up (flimflammable)",
        choices: {
          219: 1, // The Furtivity of My City: fight sleaze hobo
          223: 3, // Getting Clubbed: flimflam
          224: 2, // Exclusive!: Pick several fights
          205: 2, // Van, Damn: don't fight Chester
        },
      },
      {
        ...this.baseTask,
        ready: () => this.clubAdventures >= 21 && this.sleazeHobosLeft >= 20,
        name: "Purple it down (let's you and him fight)",
        choices: {
          219: 1, // The Furtivity of My City: fight sleaze hobo
          223: 1, // Getting Clubbed: get inside
          224: 2, // Exclusive!: Pick several fights
          205: 2, // Van, Damn: don't fight Chester
        },
      },
      {
        ...this.baseTask,
        ready: () => this.clubAdventures >= 21 && this.sleazeHobosLeft < 20,
        name: "Purple all around (let's you and me fight)",
        choices: {
          219: 1, // The Furtivity of My City: fight sleaze hobo
          223: 1, // Getting Clubbed: get inside
          224: 1, // Exclusive!: Pick a fight
          205: 2, // Van, Damn: don't fight Chester
        },
      },
    ];
  }
}
