import React from 'react';
import { Star, Download, ExternalLink, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
        <div className="flex flex-col sm:flex-row">
          {/* Product Image */}
          <div className="relative w-full sm:w-80 aspect-video sm:aspect-square overflow-hidden flex-shrink-0">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white bg-opacity-90 text-gray-800">
                {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <button className="p-1.5 bg-white bg-opacity-90 rounded-full hover:bg-white transition-colors">
                <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
              </button>
            </div>
            {product.demoUrl && (
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-white text-gray-900 px-3 py-1.5 rounded-lg font-medium flex items-center space-x-2 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ExternalLink className="h-4 w-4" />
                  <span>Preview</span>
                </button>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 p-6">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
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
                  {product.techTags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {product.techTags.length > 5 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      +{product.techTags.length - 5}
                    </span>
                  )}
                </div>

                {/* Rating & Sales */}
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-0.5">
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
                      {product.rating} ({product.totalRatings} reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Download className="h-4 w-4" />
                    <span>{product.salesCount.toLocaleString()} sales</span>
                  </div>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-2xl font-bold text-gray-900">
                  ${product.price}
                  <span className="text-sm font-normal text-gray-500 ml-1">
                    / single use
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    <ShoppingBag className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      {/* Product Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white bg-opacity-90 text-gray-800">
            {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <button className="p-1.5 bg-white bg-opacity-90 rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>
        {product.demoUrl && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-white text-gray-900 px-3 py-1.5 rounded-lg font-medium flex items-center space-x-2 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <ExternalLink className="h-4 w-4" />
              <span>Preview</span>
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        
        {/* Seller Info */}
        <div className="flex items-center space-x-2 mb-3">
          <img
            src={product.seller.avatar}
            alt={product.seller.name}
            className="h-5 w-5 rounded-full object-cover"
          />
          <span className="text-sm text-gray-600">{product.seller.name}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.seller.rating}</span>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.techTags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
          {product.techTags.length > 3 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
              +{product.techTags.length - 3}
            </span>
          )}
        </div>

        {/* Rating & Sales */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
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
            <Download className="h-3 w-3" />
            <span>{product.salesCount > 999 ? `${Math.floor(product.salesCount / 1000)}k` : product.salesCount}</span>
          </div>
        </div>
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-xl font-bold text-gray-900">
            ${product.price}
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
              <ShoppingBag className="h-4 w-4 text-gray-600" />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};