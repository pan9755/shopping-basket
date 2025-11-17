export type ItemName = "Apple" | "Banana" | "Melon" | "Lime";

export interface PricingRule {
  unitPrice: number;
  offer?: {
    type: "bogo" | "multi-buy";
    buy?: number;
    getFree?: number;
    quantity?: number;
    payFor?: number;
  };
}
