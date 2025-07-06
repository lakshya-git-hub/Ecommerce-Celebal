import { ViewMode } from "@shared/types";
import { Product } from "@shared/types";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  viewMode: ViewMode;
  isLoading?: boolean;
}

export default function ProductGrid({
  products,
  viewMode,
  isLoading = false,
}: ProductGridProps) {
  if (isLoading) {
    return (
      <div
        className={cn(
          "gap-6",
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "flex flex-col space-y-4",
        )}
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={cn(
              "animate-pulse bg-muted rounded-lg",
              viewMode === "grid" ? "aspect-[3/4]" : "h-48",
            )}
          />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
          <span className="text-2xl">📦</span>
        </div>
        <h3 className="text-lg font-medium mb-2">No products found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "gap-6",
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          : "flex flex-col space-y-4",
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant={viewMode} />
      ))}
    </div>
  );
}
