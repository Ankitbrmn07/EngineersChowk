import { Product, User, Review, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'web',
    name: 'Web Developer',
    description: 'Full-stack web applications, React components, and web templates',
    icon: 'Globe',
    color: 'blue',
    productCount: 1247
  },
  {
    id: 'app',
    name: 'App Developer',
    description: 'Mobile applications, React Native, Flutter, and native iOS/Android',
    icon: 'Smartphone',
    color: 'green',
    productCount: 892
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Python scripts, data visualization, ML models, and analytics tools',
    icon: 'BarChart3',
    color: 'purple',
    productCount: 634
  }
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    sellerId: 'user1',
    seller: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.9,
      totalSales: 234
    },
    title: 'Modern E-commerce Dashboard React Template',
    slug: 'modern-ecommerce-dashboard-react',
    category: 'web',
    techTags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Stripe'],
    price: 49,
    licenseOptions: [
      { type: 'single', name: 'Single Project', description: 'Use in one commercial project', price: 49 },
      { type: 'multiple', name: 'Multiple Projects', description: 'Use in unlimited projects', price: 99 },
      { type: 'extended', name: 'Extended License', description: 'Resell as part of your product', price: 199 }
    ],
    rating: 4.8,
    totalRatings: 127,
    salesCount: 1543,
    version: '2.1.0',
    lastUpdated: '2024-12-15',
    filesUrl: '/downloads/ecommerce-dashboard.zip',
    demoUrl: 'https://demo.engineerschowk.com/ecommerce-dashboard',
    readmeContent: '# Modern E-commerce Dashboard\n\nA fully responsive, feature-rich e-commerce dashboard built with React and TypeScript...',
    status: 'published',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    screenshots: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    ],
    features: ['Responsive Design', 'Dark/Light Mode', 'Real-time Analytics', 'Stripe Integration'],
    compatibility: ['Chrome', 'Firefox', 'Safari', 'Edge'],
    dependencies: ['React 18+', 'Node.js 16+'],
    changelog: [
      {
        version: '2.1.0',
        date: '2024-12-15',
        changes: ['Added dark mode support', 'Improved mobile responsiveness', 'Updated dependencies']
      },
      {
        version: '2.0.0',
        date: '2024-11-20',
        changes: ['Major UI overhaul', 'Added new components', 'TypeScript migration']
      }
    ]
  },
  {
    id: '2',
    sellerId: 'user2',
    seller: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.7,
      totalSales: 189
    },
    title: 'Flutter Food Delivery App Template',
    slug: 'flutter-food-delivery-app',
    category: 'app',
    techTags: ['Flutter', 'Dart', 'Firebase', 'Google Maps', 'Payment Gateway'],
    price: 79,
    licenseOptions: [
      { type: 'single', name: 'Single Project', description: 'Use in one commercial project', price: 79 },
      { type: 'multiple', name: 'Multiple Projects', description: 'Use in unlimited projects', price: 149 },
      { type: 'extended', name: 'Extended License', description: 'Resell as part of your product', price: 299 }
    ],
    rating: 4.9,
    totalRatings: 89,
    salesCount: 456,
    version: '1.3.2',
    lastUpdated: '2024-12-10',
    filesUrl: '/downloads/flutter-food-delivery.zip',
    demoUrl: 'https://demo.engineerschowk.com/flutter-food-delivery',
    readmeContent: '# Flutter Food Delivery App\n\nComplete food delivery application with user, driver, and restaurant panels...',
    status: 'published',
    thumbnail: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    screenshots: [
      'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    ],
    features: ['Real-time Tracking', 'Push Notifications', 'Multiple Payment Options', 'Admin Panel'],
    compatibility: ['iOS 12+', 'Android 6.0+'],
    dependencies: ['Flutter 3.0+', 'Firebase'],
    changelog: [
      {
        version: '1.3.2',
        date: '2024-12-10',
        changes: ['Bug fixes', 'Performance improvements', 'Updated Flutter version']
      }
    ]
  },
  {
    id: '3',
    sellerId: 'user3',
    seller: {
      name: 'Dr. Priya Sharma',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.8,
      totalSales: 298
    },
    title: 'Python Sales Analytics Dashboard',
    slug: 'python-sales-analytics-dashboard',
    category: 'data-analytics',
    techTags: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'PostgreSQL'],
    price: 35,
    licenseOptions: [
      { type: 'single', name: 'Single Project', description: 'Use in one commercial project', price: 35 },
      { type: 'multiple', name: 'Multiple Projects', description: 'Use in unlimited projects', price: 69 },
      { type: 'extended', name: 'Extended License', description: 'Resell as part of your product', price: 139 }
    ],
    rating: 4.7,
    totalRatings: 156,
    salesCount: 789,
    version: '1.2.1',
    lastUpdated: '2024-12-08',
    filesUrl: '/downloads/python-analytics-dashboard.zip',
    demoUrl: 'https://demo.engineerschowk.com/python-analytics',
    readmeContent: '# Python Sales Analytics Dashboard\n\nInteractive dashboard for sales data analysis with automated reporting...',
    status: 'published',
    thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    screenshots: [
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    ],
    features: ['Interactive Charts', 'Automated Reports', 'Data Export', 'Custom Filters'],
    compatibility: ['Python 3.8+', 'Windows', 'macOS', 'Linux'],
    dependencies: ['Python 3.8+', 'PostgreSQL'],
    changelog: [
      {
        version: '1.2.1',
        date: '2024-12-08',
        changes: ['Added new chart types', 'Improved performance', 'Bug fixes']
      }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: 'buyer1',
    user: {
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    rating: 5,
    title: 'Excellent code quality and documentation',
    content: 'This template saved me weeks of development time. The code is clean, well-documented, and the design is beautiful. Highly recommended!',
    verifiedPurchase: true,
    createdAt: '2024-12-01',
    helpful: 23
  },
  {
    id: '2',
    productId: '1',
    userId: 'buyer2',
    user: {
      name: 'Jennifer Lee',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    rating: 4,
    title: 'Great starting point for projects',
    content: 'Very comprehensive template with lots of useful components. Some parts needed customization but overall great value.',
    verifiedPurchase: true,
    createdAt: '2024-11-28',
    helpful: 12
  }
];

export const techTags = [
  'React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte',
  'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap',
  'Node.js', 'Express.js', 'FastAPI', 'Django', 'Flask', 'Spring Boot',
  'Flutter', 'React Native', 'Swift', 'Kotlin', 'Xamarin',
  'Python', 'R', 'SQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'Machine Learning', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy',
  'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes',
  'Stripe', 'PayPal', 'Firebase', 'Supabase', 'GraphQL', 'REST API'
];

export const mockUser: User = {
  id: 'current-user',
  name: 'John Developer',
  email: 'john@example.com',
  role: 'buyer',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  bio: 'Full-stack developer passionate about creating amazing web experiences',
  skills: ['React', 'Node.js', 'TypeScript', 'Python'],
  kycStatus: 'verified',
  createdAt: '2024-01-15',
  membership: {
    id: 'membership-1',
    userId: 'current-user',
    tier: 'monthly',
    status: 'active',
    discountPercentage: 20,
    creditsPerMonth: 3,
    currentCredits: 2,
    startDate: '2024-12-01',
    renewDate: '2025-01-01',
    stripeSubscriptionId: 'sub_123456'
  }
};