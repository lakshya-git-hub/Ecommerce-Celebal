import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ViewMode, SortOption, Product } from "@shared/types";
import { products, categories, featuredProducts } from "@/lib/products";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    if (category) {
      setSelectedCategories([category]);
    }
  }, [searchParams]);

  const searchQuery = searchParams.get("search") || "";

  // Get unique brands from products
  const availableBrands = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.brand))).sort();
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // Search filter
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) &&
        !product.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.some(
          (cat) => product.category.toLowerCase() === cat.replace("-", " & "),
        )
      ) {
        return false;
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Brand filter
      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      // Stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }

      // Sale filter
      if (onSaleOnly && !product.isOnSale) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => a.id.localeCompare(b.id));
        break;
      case "featured":
      default:
        filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    return filtered;
  }, [
    searchQuery,
    selectedCategories,
    priceRange,
    selectedBrands,
    inStockOnly,
    onSaleOnly,
    sortBy,
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        {!searchQuery && selectedCategories.length === 0 && (
          <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge
                  variant="secondary"
                  className="mb-4 px-4 py-2 text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Premium Quality • Fast Shipping • Best Prices
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Discover Amazing Products
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Shop the latest trends with unbeatable prices, premium
                  quality, and lightning-fast delivery. Your satisfaction is our
                  priority.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8" asChild>
                    <Link to="/?category=electronics">
                      Shop Electronics
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    View All Deals
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">
                    Express delivery within 24 hours
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Secure & Safe</h3>
                  <p className="text-sm text-muted-foreground">
                    SSL encrypted checkout process
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    On orders over $50 worldwide
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories Section */}
        {!searchQuery && selectedCategories.length === 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our carefully curated categories to find exactly what
                  you're looking for
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <Card
                    key={category.id}
                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <Link to={`/?category=${category.slug}`}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4 text-center">
                        <h3 className="font-semibold mb-1">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.productCount} products
                        </p>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Products Section */}
        {!searchQuery && selectedCategories.length === 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
                  <p className="text-muted-foreground">
                    Hand-picked favorites just for you
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/?featured=true">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <ProductGrid
                products={featuredProducts.slice(0, 4)}
                viewMode="grid"
              />
            </div>
          </section>
        )}

        {/* Product Listing Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Desktop Filters Sidebar */}
              <div className="hidden lg:block w-80 shrink-0">
                <Card className="sticky top-4">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Filters</h3>
                    <div className="space-y-6">
                      {/* Categories */}
                      <div className="space-y-3">
                        <h4 className="font-medium">Categories</h4>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <Button
                              key={category.id}
                              variant={
                                selectedCategories.includes(category.slug)
                                  ? "default"
                                  : "ghost"
                              }
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => {
                                if (
                                  selectedCategories.includes(category.slug)
                                ) {
                                  setSelectedCategories(
                                    selectedCategories.filter(
                                      (cat) => cat !== category.slug,
                                    ),
                                  );
                                } else {
                                  setSelectedCategories([
                                    ...selectedCategories,
                                    category.slug,
                                  ]);
                                }
                              }}
                            >
                              {category.name}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {(searchQuery || selectedCategories.length > 0) && (
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold">
                      {searchQuery
                        ? `Search results for "${searchQuery}"`
                        : `${selectedCategories.map((cat) => categories.find((c) => c.slug === cat)?.name).join(", ")}`}
                    </h1>
                  </div>
                )}

                <ProductFilters
                  viewMode={viewMode}
                  onViewModeChange={setViewMode}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  selectedCategories={selectedCategories}
                  onCategoryChange={setSelectedCategories}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  selectedBrands={selectedBrands}
                  onBrandChange={setSelectedBrands}
                  inStockOnly={inStockOnly}
                  onInStockChange={setInStockOnly}
                  onSaleOnly={onSaleOnly}
                  onSaleOnlyChange={setOnSaleOnly}
                  availableBrands={availableBrands}
                  resultCount={filteredAndSortedProducts.length}
                />

                <ProductGrid
                  products={filteredAndSortedProducts}
                  viewMode={viewMode}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
