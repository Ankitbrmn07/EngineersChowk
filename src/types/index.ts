export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  avatar?: string;
  bio?: string;
  skills: string[];
  stripeCustomerId?: string;
  stripeConnectId?: string;
  kycStatus: 'pending' | 'verified' | 'rejected';
  createdAt: string;
  membership?: Membership;
}

export interface Product {
  id: string;
  sellerId: string;
  seller: {
    name: string;
    avatar?: string;
    rating: number;
    totalSales: number;
  };
  title: string;
  slug: string;
  category: 'web' | 'app' | 'data-analytics';
  techTags: string[];
  price: number;
  licenseOptions: LicenseOption[];
  rating: number;
  totalRatings: number;
  salesCount: number;
  version: string;
  lastUpdated: string;
  filesUrl: string;
  demoUrl?: string;
  readmeContent: string;
  status: 'draft' | 'published' | 'archived';
  thumbnail: string;
  screenshots: string[];
  videoUrl?: string;
  features: string[];
  compatibility: string[];
  dependencies: string[];
  changelog: ChangelogEntry[];
}

export interface LicenseOption {
  type: 'single' | 'multiple' | 'extended';
  name: string;
  description: string;
  price: number;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  title: string;
  content: string;
  verifiedPurchase: boolean;
  createdAt: string;
  helpful: number;
}

export interface Order {
  id: string;
  buyerId: string;
  productId: string;
  product: Product;
  amount: number;
  currency: string;
  licenseType: string;
  paymentProvider: 'stripe' | 'buymeacoffee';
  status: 'pending' | 'completed' | 'refunded';
  invoiceUrl?: string;
  downloadUrl?: string;
  createdAt: string;
}

export interface Membership {
  id: string;
  userId: string;
  tier: 'monthly' | 'annual';
  status: 'active' | 'cancelled' | 'past_due';
  discountPercentage: number;
  creditsPerMonth: number;
  currentCredits: number;
  startDate: string;
  renewDate: string;
  stripeSubscriptionId?: string;
}

export interface FilterOptions {
  category?: string;
  techTags?: string[];
  priceRange?: [number, number];
  rating?: number;
  lastUpdated?: string;
  compatibility?: string[];
  studentFriendly?: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  productCount: number;
}