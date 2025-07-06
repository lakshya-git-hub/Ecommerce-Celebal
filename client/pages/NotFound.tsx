import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <div className="container flex max-w-md flex-col items-center justify-center gap-6 text-center">
        <div className="space-y-4">
          <div className="text-primary text-8xl font-bold">404</div>
          <h1 className="text-2xl font-bold tracking-tight">Page Not Found</h1>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or doesn't exist.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
        <div className="flex items-center space-x-3 mt-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4eab23ed6e644415a46b2fdcd767c821%2F0cc7a04532f14b4cbab45e64c4ae44fe?format=webp&width=800"
            alt="Celebal Technologies Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold">Celebal Technologies</span>
        </div>
      </div>
    </div>
  );
}
