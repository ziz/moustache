import { visitUrl, print } from "kolmafia";
import { Clan } from "libram";

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

  let positives = matchAll((diverted some cold|bamboozled|flimflammed).*?\((\d*) turns?\)/g, raidLog);
  let goodThings = Array.from(positives).map((match => match[2])).sum();
  let steams = matchAll(diverted some steam.*?\((\d*) turns?\)/g, raidLog);
  let nosepicks = matchAll(danced like a superstar.*?\((\d*) turns?\)/g, raidLog);
  let steamCount = Array.from(steams).map((match => match[1])).sum();
  let nosepickCount = Math.max(Array.from(nosepicks).map((match => match[1])).sum() - 1,0);
  const result = goodThings - steamCount - nosepickCount;
  return result
}