import { Task } from "grimoire-kolmafia";
import { myFamiliar, useFamiliar } from "kolmafia";
import { $familiar, $phylum, Snapper as SnapperLib, have } from "libram";

const snapper = $familiar`Red-Nosed Snapper`;

export const Snapper: Task = {
  name: "Setup",
  completed: () => !have(snapper) || myFamiliar() === $familiar`Red-Nosed Snapper`,
  do: () => {
    SnapperLib.trackPhylum($phylum`Hobo`);
    useFamiliar(snapper);
  },
};
