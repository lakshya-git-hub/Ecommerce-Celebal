import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PaymentForm from "@/components/checkout/PaymentForm";
import { useCart } from "@/hooks/useCart";
import { getStripe } from "@/lib/stripe";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [stripePromise] = useState(() => getStripe());

  const handlePaymentSuccess = (paymentIntent: any) => {
    // Redirect to success page with order details
    navigate(
      `/order-success?orderId=ORD-${Date.now()}&payment_intent=${paymentIntent.id}`,
    );
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">
              Add some items to your cart before checkout.
            </p>
            <Button asChild size="lg">
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/cart">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Link>
          </Button>

          <h1 className="text-3xl font-bold mb-8">Secure Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="lg:order-2">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3">
                    {cart.items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium text-sm line-clamp-2">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {item.product.brand}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              Qty: {item.quantity}
                            </span>
                            <span className="font-medium text-sm">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Order Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${cart.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>
                        {cart.shipping === 0 ? (
                          <span className="text-green-600 font-medium">
                            Free
                          </span>
                        ) : (
                          `$${cart.shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>${cart.tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${cart.total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Trust Signals */}
                  <div className="space-y-3 pt-4 border-t">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        Secure Checkout
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=40&h=25&fit=crop"
                          alt="Visa"
                          className="h-6 rounded"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=40&h=25&fit=crop"
                          alt="Mastercard"
                          className="h-6 rounded"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=40&h=25&fit=crop"
                          alt="American Express"
                          className="h-6 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div className="lg:order-1">
              <Elements stripe={stripePromise}>
                <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
              </Elements>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
