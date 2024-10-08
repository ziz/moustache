import { Task } from "grimoire-kolmafia";
import { $effect, AsdonMartin, have } from "libram";

export const DriveStealthily: Task = {
  name: "Drive Stealthily",
  completed: () => {
    return !AsdonMartin.installed() || have($effect`Driving Stealthily`);
  },
  do: () => {
    AsdonMartin.drive($effect`Driving Stealthily`);
  },
};

export const DriveObnoxiously: Task = {
  name: "Drive Obnoxiously",
  completed: () => {
    return !AsdonMartin.installed() || have($effect`Driving Obnoxiously`);
  },
  do: () => {
    AsdonMartin.drive($effect`Driving Obnoxiously`);
  },
};