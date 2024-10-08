import { visitUrl, print } from "kolmafia";
import { Clan } from "libram";
import { SCRIPT_PREFIX, daily } from "../prefs/properties";

function extractInt(regex: RegExp, text: string, group = 1) {
  if (!regex.global) throw "Regexes must be global.";
  let result = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match[group] === "a") {
      result += 1;
    } else {
      result += parseInt(match[group], 10);
    }
  }
  return result;
}

function between(text: string, start: string, end: string) {
  const startIndex = text.indexOf(start);
  if (startIndex === -1) return "";
  const endIndex = text.indexOf(end, startIndex + start.length);
  if (endIndex === -1) return "";
  return text.slice(startIndex + start.length, endIndex);
}

function matchAll(regex: RegExp, text: string) {
  if (!regex.global) throw "Regexes must be global.";
  let matches = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match);
  }
  return matches;
}

function nbsptrim(text: string): string {
  return text.replace(/&nbsp;/g, " ").trim();
}

function clubPopularityFromRaidlog(page: string): string[] {
  let raidLog = between(page,"<b>Hobopolis", "<b>Loot Distribution:");
  // const userMatches = matchAll(/>([^(<>]+?\s+\(#\d+\))/g, raidLog);
  // const users = [...new Set(Array.from(userMatches).map((match) => match[1]))];
  // return users;
  const positives = matchAll((diverted some cold|bamboozled|flimflammed).*\(\d* turns\)/g, raidLog);
  const negatives = matchAll((diverted some steam|danced like a superstar).*\(d\* turns\)/g, raidLog);
}