import { PriceCalculator } from "../src/services/priceCalculator";

describe("PriceCalculator", () => {
  test("calculates simple items", () => {
    const total = PriceCalculator.calculateTotal(["Apple", "Banana"]);
    expect(total).toBe(35 + 20);
  });

  test("applies BOGO for melons", () => {
    const total = PriceCalculator.calculateTotal(["Melon", "Melon"]);
    expect(total).toBe(50);
  });

  test("applies 3-for-2 for limes", () => {
    const total = PriceCalculator.calculateTotal(["Lime", "Lime", "Lime"]);
    expect(total).toBe(30);
  });

  test("mixed basket", () => {
    const total = PriceCalculator.calculateTotal([
      "Apple",
      "Apple",
      "Banana",
      "Melon",
      "Melon",
      "Lime",
      "Lime",
      "Lime"
    ]);
    expect(total).toBe(35*2 + 20 + 50 + 15*2); 
  });
});
