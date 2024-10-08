import { print, totalTurnsPlayed } from "kolmafia";
import { $item, Session, get, set } from "libram";

import { LIFETIME_TURNS_SPENT, TURNS_SPENT } from "../prefs/properties";

const initialSession = Session.current();
const initialTurns = totalTurnsPlayed();

export function save(): void {
  const sessionDiff = Session.current().diff(initialSession);
  const cognacs = sessionDiff.items.get($item`Ralph IX cognac`) ?? 0;
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
