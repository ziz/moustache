import { Args, getTasks } from "grimoire-kolmafia";
import { cliExecute, getClanId, myMeat } from "kolmafia";
import { Clan, get, set } from "libram";

import * as CognacStats from "./lib/cognac";
import { Engine } from "./lib/engine";
// import { Gossip } from "./lib/gossip";
import { checkClan, maybeResetDailyPreferences, showPreferences } from "./prefs/prefs";
import * as Properties from "./prefs/properties";
// import { Cognac } from "./quests/cognac/cognac";
import { PLD } from "./quests/pld/pld";
import { Prologue } from "./quests/prologue/prologue";
import { Sewers } from "./quests/sewers/sewers";
import { Spookyraven } from "./quests/spookyraven/spookyraven";
import { TownSquare } from "./quests/townsquare/townsquare";
import { Wander } from "./quests/wander/wander";

const args = Args.create("Cognac", "Farming perscription strength alcohol since 2023.", {
  config: Args.flag({
    help: "Show script configuration, and exit.",
    default: false,
  }),
  stats: Args.flag({
    help: "Show lifetime achievement awards in the field of cognac.",
    default: false,
  }),
  nocage: Args.flag({
    help: "Do not fetch cagebait.",
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
    CognacStats.printLifetime();
    return;
  }

  // checkGarbo();
  checkClan();
  maybeResetDailyPreferences();

  const cognacTasks = getTasks([
    Prologue,
    Wander,
    Spookyraven,
    Sewers(args.nocage),
    TownSquare,
    PLD,
    // Cognac,
  ]);
  const engine = new Engine(cognacTasks);

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
    set(Properties.HEAP_ATTEMPTS, 0);
    set(Properties.LAST_STENCH_CHECK, 0);
    // new Gossip().destroy();
    Clan.join(startingClan);
    if (meatToCloset > 0) {
      cliExecute(`closet take ${meatToCloset} meat`);
    }
    CognacStats.save();
    CognacStats.printSession();
  }
}
