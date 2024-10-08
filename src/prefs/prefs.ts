import { abort, print, todayToString, userConfirm } from "kolmafia";
import { get, set } from "libram";

import * as Properties from "./properties";

export function showPreferences(): void {
  print("Preferences for moustacherider", "blue");
  print("");
  Object.values(Properties).map(prettyPrint);
}

function prettyPrint(prop: string): void {
  const propVal = get(prop);
  let color = "black";
  if (!propVal) {
    color = "gray";
  }
  print(`${prop}: ${propVal}`, color);
}

export function resetDailyPreference(trackingPreference: string): boolean {
  const today = todayToString();
  if (get(trackingPreference, "") !== today) {
    set(trackingPreference, today);
    return true;
  } else {
    return false;
  }
}

export function maybeResetDailyPreferences(): void {
  if (resetDailyPreference(Properties.RESULTS_DAY)) {
    set(Properties.TURNS_SPENT, 0);
    set(Properties.COGNACS, 0);
    set(Properties.DIVES, 0);
  }
}

export function checkGarbo(): void {
  if (get(Properties.SKIP_GARBO)) {
    return;
  }
  // Certified 100% "not a hack"
  if (parseInt(get("garboEmbezzlerCount")) > 0) {
    return;
  }
  if (userConfirm("You have not yet run garbo. Are you sure you wish to proceed?")) {
    return;
  }
  abort("Go bonk those embezzlers real good.");
}

export function checkClan(): void {
  if (!get(Properties.CLAN)) {
    throw `Please set moustacherider clan pref. See \`moustacherider config\``;
  }
}
