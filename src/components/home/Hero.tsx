import React, { useState } from 'react';
import { Search, TrendingUp, Users, Award } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Find production-ready 
            <span className="text-blue-600 block md:inline md:ml-3">source code</span>
            <span className="block">in minutes</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers who buy and sell premium source code, templates, and components. 
            Skip the boilerplate and focus on what matters.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search React dashboards, Flutter apps, Python analytics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
              <button className="absolute inset-y-0 right-0 mr-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Search
              </button>
            </div>
            
            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="text-sm text-gray-500">Popular:</span>
              {['React Dashboard', 'Flutter App', 'Python ML', 'Next.js Template'].map((tag) => (
                <button
                  key={tag}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2,773</div>
              <div className="text-gray-600">Premium Templates</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">15,000+</div>
              <div className="text-gray-600">Active Developers</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate?.('catalog')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Browse Templates
            </button>
            <button 
              onClick={() => onNavigate?.('seller')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};