import { ItemName, PricingRule } from "../types/items";

const pricingRules: Record<ItemName, PricingRule> = {
  Apple: { unitPrice: 35 },
  Banana: { unitPrice: 20 },
  Melon: {
    unitPrice: 50,
    offer: { type: "bogo", buy: 1, getFree: 1 }
  },
  Lime: {
    unitPrice: 15,
    offer: { type: "multi-buy", quantity: 3, payFor: 2 }
  }
};

export class PriceCalculator {
  static calculateTotal(items: readonly ItemName[]): number {
    const itemCount = items.reduce<Record<ItemName, number>>((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {} as Record<ItemName, number>);

    let total = 0;

    for (const item in itemCount) {
      const count = itemCount[item as ItemName];
      const rule = pricingRules[item as ItemName];

      if (!rule.offer) {
        total += count * rule.unitPrice;
        continue;
      }

      if (rule.offer.type === "bogo") {
        const effective = Math.ceil(count / 2);
        total += effective * rule.unitPrice;
      }

      if (rule.offer.type === "multi-buy") {
        const { quantity, payFor } = rule.offer;
        const groups = Math.floor(count / (quantity!));
        const remainder = count % quantity!;
        total += groups * payFor! * rule.unitPrice + remainder * rule.unitPrice;
      }
    }

    return total;
  }
}
