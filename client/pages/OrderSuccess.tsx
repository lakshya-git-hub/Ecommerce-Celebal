import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, Download, ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/hooks/useCart";

export default function OrderSuccess() {
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();
  const orderId = searchParams.get("orderId") || "ORD-" + Date.now();
  const paymentIntentId = searchParams.get("payment_intent");

  useEffect(() => {
    // Clear cart after successful order
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">
              Order Confirmed!
            </h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your order has been successfully
              processed.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Order Number:</span>
                <Badge variant="secondary" className="font-mono">
                  {orderId}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Order Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Payment Status:</span>
                <Badge variant="default" className="bg-green-600">
                  Paid
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Estimated Delivery:</span>
                <span>
                  {new Date(
                    Date.now() + 3 * 24 * 60 * 60 * 1000,
                  ).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium">Order Processing</p>
                    <p className="text-sm text-muted-foreground">
                      We're preparing your items for shipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-muted mt-2"></div>
                  <div>
                    <p className="font-medium">Shipment</p>
                    <p className="text-sm text-muted-foreground">
                      Your order will be shipped within 1-2 business days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-muted mt-2"></div>
                  <div>
                    <p className="font-medium">Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Expected delivery in 3-5 business days
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Confirmation */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="font-medium text-blue-900">
                Confirmation Email Sent
              </span>
            </div>
            <p className="text-sm text-blue-800">
              We've sent a detailed order confirmation to your email address.
              Keep it for your records and tracking information.
            </p>
          </div>

          <Separator className="my-6" />

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/account/orders">View Order History</Link>
              </Button>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link to="/">
                  Continue Shopping
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Support */}
          <div className="text-center mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              Need help with your order?
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="link" size="sm" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <Button variant="link" size="sm" asChild>
                <Link to="/faq">FAQ</Link>
              </Button>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <Button variant="link" size="sm" asChild>
                <Link to="/track-order">Track Your Order</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
