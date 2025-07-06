import { loadStripe, Stripe } from "@stripe/stripe-js";

// This would normally come from environment variables
const STRIPE_PUBLISHABLE_KEY = "pk_test_51234567890abcdef"; // Demo key - replace with real key

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
