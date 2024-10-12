import { Task } from "grimoire-kolmafia";
import { getAutumnatonLocations } from "kolmafia";
import { $locations, AutumnAton } from "libram";

export const deployFalle: Task = {
  name: "Deploy fall-e",
  completed: () => !AutumnAton.available(),
  do: () => {
    for (const loc of $locations`Shadow Rift, The Haunted Conservatory, The Haunted Pantry`) {
      if (AutumnAton.sendTo(loc)) return;
    }
    getAutumnatonLocations();
  },
};
