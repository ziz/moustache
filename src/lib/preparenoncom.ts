import {
  Item,
  buy,
  combatRateModifier,
  effectModifier,
  haveEffect,
  mallPrice,
  numericModifier,
  use,
} from "kolmafia";
import { $items, getModifier, have } from "libram";

type Info = { item: Item; modifier: number; duration: number; price: number };

// Value of 1 turn of 5% -NC
const EFFECTIVE_NC_VALUE = 100;

const itemInfo: Info[] = [];
for (const item of $items``) {
  const effect = effectModifier(item, "Effect");
  const modifier = -1 * getModifier("Combat Rate", effect);

  if (modifier <= 0) {
    continue;
  }

  const duration = numericModifier(item, "Effect Duration");
  if (duration === 0) {
    continue;
  }

  if (!item.tradeable) {
    continue;
  }

  const price = mallPrice(item);

  if (price / duration > EFFECTIVE_NC_VALUE) {
    continue;
  }

  itemInfo.push({
    item,
    modifier,
    duration,
    price,
  });
}

const byValue = (a: Info, b: Info): number => {
  const valA = value(a);
  const valB = value(b);
  if (valA < valB) {
    return 1;
  }
  if (valA > valB) {
    return -1;
  }
  return 0;
};

// Sorting once gives an extremely loose ordering of optimal -com items. Revisit if its garbage.
itemInfo.sort(byValue);

function value(info: Info): number {
  return (info.duration * info.modifier) / info.price;
}

export function capNonCombat(): void {
  let itemBought = false;

  for (let i = 0; i < itemInfo.length; i++) {
    const info = itemInfo[i];
    const item = info.item;
    if (combatRateModifier() <= -35) {
      break;
    }
    if (haveEffect(getModifier("Effect", item))) {
      continue;
    }

    const maxPrice = Math.min((EFFECTIVE_NC_VALUE * info.duration * info.modifier) / 5, 10000);
    if (info.price < maxPrice && have(item)) {
      if (!use(item, 1)) {
        throw `Failed to use item`;
      }
      continue;
    }

    const bought = buy(item, 1, maxPrice);
    if (bought > 1) {
      throw `Bought too many items.`;
    }
    if (bought === 0) {
      // No more items to buy
      break;
    }
    if (!use(item, 1)) {
      throw `Failed to use item`;
    }
    itemBought = true;
    info.price = mallPrice(item);
  }

  if (itemBought) {
    itemInfo.sort(byValue);
  }
}
