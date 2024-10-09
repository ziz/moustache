import { Quest, Task } from "grimoire-kolmafia";
import { myAdventures } from "kolmafia";

import { DriveObnoxiously } from "../shared/asdon";
import { Explore } from "./tasks/explore";
import { Snapper } from "./tasks/snapper";

const explore = new Explore();

export const PLD: Quest<Task> = {
  name: "Purple Light District",
  completed: () => {
    return myAdventures() < 1 || explore.doneWithPLD;
  },
  tasks: [DriveObnoxiously, Snapper, ...explore.getTasks()],
};
