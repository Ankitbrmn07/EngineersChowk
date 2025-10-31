import React from 'react';
import { Globe, Smartphone, BarChart3, ArrowRight } from 'lucide-react';
import { categories } from '../../data/mockData';

const iconMap = {
  Globe,
  Smartphone,
  BarChart3
};

export const CategoryTiles: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need from our curated collection of high-quality source code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
              green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
              purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
            };

            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses]} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    {category.productCount.toLocaleString()} products
                  </span>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-lg group">
            <span>View all categories</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};