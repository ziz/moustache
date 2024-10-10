import { Quest, Task } from "grimoire-kolmafia";
import { myAdventures, visitUrl } from "kolmafia";

import { DriveStealthily } from "../shared/asdon";
import { AcquireTasks } from "./tasks/acquire";
import { CageTasks } from "./tasks/cage";
import { ExploreTasks } from "./tasks/explore";

let complete = false;

export function Sewers(nocage: boolean): Quest<Task> {
  return {
    name: "Sewers",
    completed: () => {
      if (myAdventures() < 11) {
        return true;
      }
      if (!complete) {
        complete = !!visitUrl("clan_hobopolis.php?place=3&pwd", false).match(/Richard's Redoubt/);
      }
      return complete;
    },
    tasks: [DriveStealthily, ...(nocage ? [] : CageTasks), ...AcquireTasks, ...ExploreTasks],
  };
}
