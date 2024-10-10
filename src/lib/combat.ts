import { Item, inebrietyLimit, itemAmount, myInebriety } from "kolmafia";
import { $item, $monster, $skill, Macro as LibramMacro, SongBoom, have } from "libram";

import { shouldUseFreeRunItem } from "./freeRun";

const drunk = (): boolean => {
  return myInebriety() > inebrietyLimit();
};

export class Macro extends LibramMacro {
  pickpocket(): Macro {
    return this.step("pickpocket");
  }

  static pickpocket(): Macro {
    return new Macro().pickpocket();
  }

  tryItemsTogether(itemOrItems: Item | [Item, Item]) {
    if (have($skill`Ambidextrous Funkslinging`)) {
      return this.tryItem(itemOrItems);
    } else if (Array.isArray(itemOrItems)) {
      return this.tryItem(itemOrItems[0]).tryItem(itemOrItems[1]);
    } else {
      return this.tryItem(itemOrItems);
    }
  }

  static tryItemsTogether(itemOrItems: Item | [Item, Item]) {
    return new Macro().tryItemsTogether(itemOrItems);
  }

  itemWhileHave(item: Item) {
    return this.externalIf(
      itemAmount(item) % 2 === 1 && itemAmount(item) < 60,
      Macro.item(item),
    ).while_(`hascombatitem ${item}`, Macro.tryItemsTogether([item, item]));
  }

  static itemWhileHave(item: Item) {
    return new Macro().itemWhileHave(item);
  }

  maybeFreeRunItems() {
    return this.externalIf(
      shouldUseFreeRunItem(),
      Macro.tryItemsTogether([$item`Louder Than Bomb`, $item`tennis ball`])
        .tryItem($item`divine champagne popper`)
        .itemWhileHave($item`green smoke bomb`)
        .itemWhileHave($item`tattered scrap of paper`)
        .itemWhileHave($item`GOTO`),
    );
  }

  static freeRunItems() {
    return new Macro().maybeFreeRunItems();
  }
  tryDelevelStun(): Macro {
    return (
      this.trySkill($skill`Curse of Weaksauce`)
        .trySkill($skill`Micrometeorite`)
        .tryItemsTogether([$item`Time-Spinner`, $item`HOA citation pad`])
        .tryItemsTogether([$item`Rain-Doh blue balls`, $item`Rain-Doh indigo cup`])
        .tryItemsTogether([$item`train whistle`, $item`little red book`])
        // requires arms or will abort
        .if_($monster`Normal hobo`, Macro.tryItem($item`El Vibrato restraints`))
        .if_($monster`Stench hobo`, Macro.tryItem($item`El Vibrato restraints`))
        .if_($monster`Sleaze hobo`, Macro.tryItem($item`El Vibrato restraints`))
    );
  }

  static tryDelevelStun(): Macro {
    return new Macro().tryDelevelStun();
  }

  tryFreeRun(): Macro {
    return this.externalIf(
      !drunk(),
      // Only delevel if we have a chance of dying, to speed up combat
      Macro.tryItemsTogether([$item`Rain-Doh blue balls`, $item`Rain-Doh indigo cup`])
        .trySkill($skill`Extract`)
        .tryItem($item`porquoise-handled sixgun`)
        .trySkill($skill`Bowl a Curveball`)
        .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
        .maybeFreeRunItems(),
    )
      .runaway()
      .repeat();
  }

  static tryFreeRun(): Macro {
    return new Macro().tryFreeRun();
  }

  trySingAlong(): Macro {
    if (!SongBoom.have() || SongBoom.song() !== "Total Eclipse of Your Meat") return this;
    return this.trySkill($skill`Sing Along`);
  }

  static trySingAlong(): Macro {
    return new Macro().trySingAlong();
  }

  stasis(): Macro {
    return this.externalIf(
      !drunk(),
      Macro.trySkill($skill`Curse of Weaksauce`)
        .trySkill($skill`Micrometeorite`)
        .tryItemsTogether([$item`Time-Spinner`, $item`HOA citation pad`])
        .trySkill($skill`Extract`),
    );
  }

  static stasis(): Macro {
    return new Macro().stasis();
  }

  attackKill(): Macro {
    return this.stasis()
      .tryItem($item`porquoise-handled sixgun`)
      .trySingAlong()
      .attack()
      .repeat();
  }

  static attackKill(): Macro {
    return new Macro().attackKill();
  }

  mortarShell(): Macro {
    return this.stasis()
      .tryItem($item`porquoise-handled sixgun`)
      .trySingAlong()
      .trySkill($skill`Stuffed Mortar Shell`)
      .tryItem($item`seal tooth`)
      .trySkill($skill`Weapon of the Pastalord`)
      .attack() // Mortar shell should finish the fight but just in-case
      .repeat();
  }

  static mortarShell(): Macro {
    return new Macro().mortarShell();
  }
}
