function extractInt(regex: RegExp, text: string, group = 1): number {
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

function between(text: string, start: string, end: string): string {
  const startIndex = text.indexOf(start);
  if (startIndex === -1) return "";
  const endIndex = text.indexOf(end, startIndex + start.length);
  if (endIndex === -1) return "";
  return text.slice(startIndex + start.length, endIndex);
}

// function matchAll(regex: RegExp, text: string) {
//   if (!regex.global) throw "Regexes must be global.";
//   const matches = [];
//   let match;
//   while ((match = regex.exec(text)) !== null) {
//     matches.push(match);
//   }
//   return matches;
// }

export function roughHoboRemnant(page: string): number {
  // This is a rough estimate of the number of hobos remaining in PLD.
  // It's not exact but it's good enough to stop us from starting really useless fights.
  // We assume the smallest number of starting hobos (490), that all the hobo fights happened first,
  // and then subtract 10%. rounded down, for each barfight.
  const raidLog = between(page, "<b>Hobopolis", "<b>Loot Distribution:");
  const barfights = extractInt(/started (a|\d*) barfight/g, raidLog);
  const sleazeHobos = extractInt(/defeated\s+Sleaze hobo x (\d*)/g, raidLog);
  let hobos = 490 - sleazeHobos;
  // print(`490 - ${sleazeHobos} = ${hobos}, barfights: ${barfights}`);
  for (let i = 0; i < barfights; i++) {
    hobos = Math.ceil(hobos * 0.9);
    // print(`barfight ${i + 1}: ${hobos}`);
  }
  return hobos;
}

export function chesterDead(page: string): boolean {
  const raidLog = between(page, "<b>Hobopolis", "<b>Loot Distribution:");
  return raidLog.includes(" defeated Chester");
}

export function clubPopularityFromRaidlog(page: string): number {
  const raidLog = between(page, "<b>Hobopolis", "<b>Loot Distribution:");

  const positives = extractInt(
    /(diverted some cold|bamboozled|flimflammed).*?\((\d*) turns?\)/g,
    raidLog,
    2,
  );
  // print(`positives: ${positives}`);
  const steams = extractInt(/diverted some steam.*?\((\d*) turns?\)/g, raidLog);
  // print(`steams: ${steams}`);
  const nosepicks = Math.max(
    extractInt(/danced like a superstar.*?\((\d*) turns?\)/g, raidLog) - 1,
    0,
  );
  // print(`nosepicks: ${nosepicks}`);
  const result = positives - steams - nosepicks;
  return result;
}
