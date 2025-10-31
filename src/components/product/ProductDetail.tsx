import React, { useState } from 'react';
import { 
  Star, 
  Download, 
  ExternalLink, 
  Heart, 
  Share2, 
  Shield, 
  Clock, 
  Code, 
  FileText,
  Play,
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react';
import { Product, LicenseOption } from '../../types';
import { featuredProducts, reviews } from '../../data/mockData';

interface ProductDetailProps {
  productId: string;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const [selectedLicense, setSelectedLicense] = useState<LicenseOption | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock product data - in real app, fetch by ID
  const product = featuredProducts[0];
  const productReviews = reviews.filter(review => review.productId === productId);

  React.useEffect(() => {
    if (product && product.licenseOptions.length > 0) {
      setSelectedLicense(product.licenseOptions[0]);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.screenshots.length - 1 : prev - 1
    );
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'demo', label: 'Live Demo', icon: Play },
    { id: 'code', label: 'Code Preview', icon: Code },
    { id: 'reviews', label: `Reviews (${productReviews.length})`, icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={product.screenshots[currentImageIndex]}
                  alt={`${product.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {product.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {product.screenshots.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Demo Button */}
                {product.demoUrl && (
                  <div className="absolute top-4 right-4">
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {product.screenshots.length > 1 && (
                <div className="p-4 border-t border-gray-100">
                  <div className="flex space-x-3 overflow-x-auto">
                    {product.screenshots.map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={screenshot}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
                  
                  {/* Seller Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={product.seller.avatar}
                      alt={product.seller.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{product.seller.name}</div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{product.seller.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{product.seller.totalSales} sales</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating & Stats */}
                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium text-gray-900">{product.rating}</span>
                      <span className="text-gray-600">({product.totalRatings} reviews)</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Download className="h-4 w-4" />
                      <span>{product.salesCount.toLocaleString()} downloads</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Updated {new Date(product.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button className="p-3 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8 overflow-x-auto">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                          activeTab === tab.id
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="prose max-w-none">
                {activeTab === 'overview' && (
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                      <div className="text-gray-700 leading-relaxed">
                        {product.readmeContent}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Compatibility</h3>
                        <ul className="space-y-2">
                          {product.compatibility.map((item, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                        <ul className="space-y-2">
                          {product.dependencies.map((dep, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-gray-700">{dep}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'demo' && (
                  <div className="text-center py-12">
                    <div className="mb-6">
                      <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Demo</h3>
                      <p className="text-gray-600">
                        Experience the full functionality of this template
                      </p>
                    </div>
                    {product.demoUrl ? (
                      <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Open Live Demo</span>
                      </a>
                    ) : (
                      <p className="text-gray-500">Demo not available for this product</p>
                    )}
                  </div>
                )}

                {activeTab === 'code' && (
                  <div>
                    <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                      <div className="mb-4 text-gray-400">// File structure preview</div>
                      <div className="space-y-1">
                        <div>📁 src/</div>
                        <div className="ml-4">📁 components/</div>
                        <div className="ml-8">📄 Header.tsx</div>
                        <div className="ml-8">📄 Footer.tsx</div>
                        <div className="ml-8">📄 ProductCard.tsx</div>
                        <div className="ml-4">📁 pages/</div>
                        <div className="ml-8">📄 Home.tsx</div>
                        <div className="ml-8">📄 Dashboard.tsx</div>
                        <div className="ml-4">📁 utils/</div>
                        <div className="ml-8">📄 api.ts</div>
                        <div className="ml-8">📄 helpers.ts</div>
                        <div>📄 package.json</div>
                        <div>📄 README.md</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Full source code will be available after purchase
                    </p>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {productReviews.length > 0 ? (
                      productReviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.user.avatar}
                              alt={review.user.name}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-medium text-gray-900">{review.user.name}</span>
                                {review.verifiedPurchase && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                    <Shield className="h-3 w-3 mr-1" />
                                    Verified Purchase
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                  {new Date(review.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                              <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
                              <p className="text-gray-700 leading-relaxed">{review.content}</p>
                              <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                                <button className="hover:text-gray-700 transition-colors">
                                  Helpful ({review.helpful})
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
                        <p className="text-gray-600">Be the first to review this product</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Purchase Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose License</h3>
                  <div className="space-y-3">
                    {product.licenseOptions.map((license) => (
                      <label
                        key={license.type}
                        className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedLicense?.type === license.type
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="license"
                          value={license.type}
                          checked={selectedLicense?.type === license.type}
                          onChange={() => setSelectedLicense(license)}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{license.name}</span>
                          <span className="text-lg font-bold text-gray-900">${license.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{license.description}</p>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Buy Now - ${selectedLicense?.price || product.price}
                  </button>
                  
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    Add to Cart
                  </button>

                  <div className="text-center">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      ☕ Buy me a coffee
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Shield className="h-4 w-4" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Download className="h-4 w-4" />
                    <span>Instant download after purchase</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Lifetime access & updates</span>
                  </div>
                </div>
              </div>

              {/* Seller Info */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Seller</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{product.seller.name}</div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{product.seller.rating} rating</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{product.seller.totalSales}</div>
                    <div className="text-sm text-gray-600">Total Sales</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">4.9</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                </div>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};