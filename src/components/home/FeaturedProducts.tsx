import React from 'react';
import { Star, Download, ExternalLink, Heart, ShoppingBag } from 'lucide-react';
import { featuredProducts } from '../../data/mockData';

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked premium source code from our top-rated creators
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 text-gray-800">
                    {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>
                {product.demoUrl && (
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                
                {/* Seller Info */}
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-600">{product.seller.name}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.seller.rating}</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.techTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {product.techTags.length > 3 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      +{product.techTags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Rating & Sales */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.totalRatings})
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Download className="h-4 w-4" />
                    <span>{product.salesCount.toLocaleString()} sales</span>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    ${product.price}
                    <span className="text-sm font-normal text-gray-500 ml-1">
                      / single use
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
                      <ShoppingBag className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};