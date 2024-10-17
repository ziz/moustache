import { Args, getTasks } from "grimoire-kolmafia";
import { cliExecute, getClanId, myMeat, print, visitUrl } from "kolmafia";
import { Clan, get } from "libram";

import { Engine } from "./lib/engine";
import * as MouStats from "./lib/moustache";
import { chesterDead, clubPopularityFromRaidlog, roughHoboRemnant } from "./lib/raidlog";
import { checkClan, maybeResetDailyPreferences, showPreferences } from "./prefs/prefs";
import * as Properties from "./prefs/properties";
import { PLD } from "./quests/pld/pld";
import { Prologue } from "./quests/prologue/prologue";
import { Sewers } from "./quests/sewers/sewers";
import { Spookyraven } from "./quests/spookyraven/spookyraven";
import { TownSquare } from "./quests/townsquare/townsquare";
import { Wander } from "./quests/wander/wander";

const args = Args.create("Moustacherider", "Farming perscription strength moustaches since 2024.", {
  config: Args.flag({
    help: "Show script configuration, and exit.",
    default: false,
  }),
  stats: Args.flag({
    help: "Show lifetime achievement awards in the field of moustaches.",
    default: false,
  }),
  nocage: Args.flag({
    help: "Do not fetch cagebait.",
    default: false,
  }),
  showclub: Args.flag({
    help: "Show club information.",
    default: false,
  }),
  moustacheless: Args.flag({
    help: "Go into Hobopolis knowing that Chester might already be dead.",
    default: false,
  }),
});

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }
  if (args.config) {
    showPreferences();
    return;
  }
  if (args.stats) {
    MouStats.printLifetime();
    return;
  }
  if (args.showclub) {
    const raidlog = visitUrl("clan_raidlogs.php");
    print(`Club total: ${clubPopularityFromRaidlog(raidlog)}`);
    print(`Rough sleaze hobos remaining: ${roughHoboRemnant(raidlog)}`);
    print(`Chester dead: ${chesterDead(raidlog) ? "Yes" : "No...not *yet*."}`);
    return;
  }

  checkClan();
  maybeResetDailyPreferences();

  if (!args.moustacheless) {
    const raidlog = visitUrl("clan_raidlogs.php");
    if (chesterDead(raidlog)) {
      print(
        "Chester has already been defeated. Rerun with 'moustacheless' if you want moustacherider to go through the sewer anyway.",
        "red",
      );
      return;
    }
    if (roughHoboRemnant(raidlog) < 40) {
      print(
        "There's probably not very many hobos left in PLD. Rerun with 'moustacheless' if you want moustacherider to go through the sewer anyway.",
        "red",
      );
      return;
    }
  }
  const mousTasks = getTasks([Prologue, Wander, Spookyraven, Sewers(args.nocage), TownSquare, PLD]);
  const engine = new Engine(mousTasks);

  const startingClan = getClanId();
  const meatToCloset = myMeat() > 1000000 ? myMeat() - 1000000 : 0;
  try {
    const clan = get(Properties.CLAN);
    if (meatToCloset > 0) {
      cliExecute(`closet put ${meatToCloset} meat`);
    }
    if (startingClan.toString(10) !== clan) {
      Clan.join(clan);
    }
    engine.run();
  } finally {
    engine.destruct();
    // new Gossip().destroy();
    Clan.join(startingClan);
    if (meatToCloset > 0) {
      cliExecute(`closet take ${meatToCloset} meat`);
    }
    MouStats.save();
    MouStats.printSession();
  }
}
