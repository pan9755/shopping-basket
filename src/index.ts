import { PriceCalculator } from "./services/priceCalculator";

const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"] as const;

const total = PriceCalculator.calculateTotal(basket);

console.log(`Total cost: ${total}p`);
