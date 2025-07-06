import { Product, Category } from "@shared/types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop",
    productCount: 156,
  },
  {
    id: "2",
    name: "Fashion",
    slug: "fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    productCount: 298,
  },
  {
    id: "3",
    name: "Home & Garden",
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    productCount: 89,
  },
  {
    id: "4",
    name: "Sports",
    slug: "sports",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    productCount: 134,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    ],
    category: "Electronics",
    brand: "AudioTech",
    rating: 4.8,
    reviewCount: 284,
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery",
      "Bluetooth 5.0",
      "Quick charge",
    ],
    inStock: true,
    stockCount: 24,
    tags: ["wireless", "noise-cancelling", "premium"],
    isOnSale: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop",
    ],
    category: "Electronics",
    brand: "FitTech",
    rating: 4.6,
    reviewCount: 189,
    description:
      "Advanced fitness tracking with heart rate monitoring and GPS.",
    features: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "Water Resistant",
      "7-day battery",
    ],
    inStock: true,
    stockCount: 18,
    tags: ["fitness", "smartwatch", "health"],
    isOnSale: false,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Minimalist Desk Chair",
    price: 449.99,
    originalPrice: 599.99,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
    ],
    category: "Home & Garden",
    brand: "ModernSpace",
    rating: 4.7,
    reviewCount: 92,
    description:
      "Ergonomic office chair with premium materials and modern design.",
    features: [
      "Ergonomic Design",
      "Premium Materials",
      "Adjustable Height",
      "5-year warranty",
    ],
    inStock: true,
    stockCount: 8,
    tags: ["furniture", "office", "ergonomic"],
    isOnSale: true,
    isFeatured: false,
  },
  {
    id: "4",
    name: "Premium Running Shoes",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    ],
    category: "Sports",
    brand: "RunFast",
    rating: 4.5,
    reviewCount: 156,
    description:
      "Lightweight running shoes with advanced cushioning technology.",
    features: [
      "Lightweight Design",
      "Advanced Cushioning",
      "Breathable Mesh",
      "Durable Sole",
    ],
    inStock: true,
    stockCount: 34,
    tags: ["running", "sports", "lightweight"],
    isOnSale: false,
    isFeatured: true,
  },
  {
    id: "5",
    name: "Vintage Denim Jacket",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=400&fit=crop",
    ],
    category: "Fashion",
    brand: "VintageStyle",
    rating: 4.3,
    reviewCount: 78,
    description: "Classic denim jacket with vintage wash and modern fit.",
    features: ["Vintage Wash", "Modern Fit", "Premium Denim", "Classic Style"],
    inStock: true,
    stockCount: 12,
    tags: ["denim", "vintage", "casual"],
    isOnSale: true,
    isFeatured: false,
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    ],
    category: "Electronics",
    brand: "ChargeFast",
    rating: 4.4,
    reviewCount: 203,
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
    features: [
      "Fast Charging",
      "Qi Compatible",
      "LED Indicator",
      "Non-slip Base",
    ],
    inStock: true,
    stockCount: 45,
    tags: ["wireless", "charging", "convenient"],
    isOnSale: false,
    isFeatured: false,
  },
];

export const featuredProducts = products.filter(
  (product) => product.isFeatured,
);
export const saleProducts = products.filter((product) => product.isOnSale);
