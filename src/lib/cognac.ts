import { print, totalTurnsPlayed } from "kolmafia";
import { get, set } from "libram";

import { LIFETIME_TURNS_SPENT, TURNS_SPENT } from "../prefs/properties";

const initialTurns = totalTurnsPlayed();

export function save(): void {
  set(TURNS_SPENT, get(TURNS_SPENT, 0) + totalTurnsPlayed() - initialTurns);

  set(LIFETIME_TURNS_SPENT, get(LIFETIME_TURNS_SPENT, 0) + totalTurnsPlayed() - initialTurns);
}

export function printSession(): void {
  print("Moustache summary:");
  print("");

  print(`You've spent ${get(TURNS_SPENT)} turns moustache-hunting today!`);
}

export function printLifetime(): void {
  print("");
  print("Moustache lifetime summary:");
  print("");

  print(`You've spent ${get(LIFETIME_TURNS_SPENT, 0)} turns moustache-hunting!`, `green`);
}
