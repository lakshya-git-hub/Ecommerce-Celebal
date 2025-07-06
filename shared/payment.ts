export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: "requires_payment_method" | "succeeded" | "failed" | "processing";
  created: number;
  payment_method?: string;
}

export interface BillingDetails {
  name: string;
  email: string;
  address: {
    line1: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
}

export interface Order {
  id: string;
  paymentIntentId: string;
  amount: number;
  currency: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: OrderItem[];
  billingDetails: BillingDetails;
  createdAt: number;
  estimatedDelivery: number;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
}

export interface PaymentFormData {
  billingDetails: BillingDetails;
  savePaymentMethod?: boolean;
  promoCode?: string;
}
