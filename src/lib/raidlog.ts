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

export function clubPopularityFromRaidlog(page: string): number {
  const raidLog = between(page, "<b>Hobopolis", "<b>Loot Distribution:");

  const positives = extractInt(
    /(diverted some cold|bamboozled|flimflammed).*?\((\d*) turns?\)/g,
    raidLog,
    2,
  );
  const steams = extractInt(/diverted some steam.*?\((\d*) turns?\)/g, raidLog);
  const nosepicks = Math.min(
    extractInt(/danced like a superstar.*?\((\d*) turns?\)/g, raidLog) - 1,
    0,
  );
  const result = positives - steams - nosepicks;
  return result;
}
