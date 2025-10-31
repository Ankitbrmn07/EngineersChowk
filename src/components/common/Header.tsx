import React, { useState } from 'react';
import { Search, Menu, X, User, ShoppingBag, Heart, PlusCircle } from 'lucide-react';
import { mockUser } from '../../data/mockData';

interface HeaderProps {
  onNavigate?: (page: string) => void;
  onAuthClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Engineers<span className="text-blue-600">Chowk</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:ml-8 lg:flex lg:space-x-8">
              <button 
                onClick={() => onNavigate?.('catalog')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Browse
              </button>
              <button 
                onClick={() => onNavigate?.('catalog')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Web Developer
              </button>
              <button 
                onClick={() => onNavigate?.('catalog')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                App Developer
              </button>
              <button 
                onClick={() => onNavigate?.('catalog')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Data Analytics
              </button>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for source code, templates, components..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile search button */}
            <button className="md:hidden p-2 text-gray-400 hover:text-gray-500">
              <Search className="h-5 w-5" />
            </button>

            {/* Sell Button */}
            <button 
              onClick={() => onNavigate?.('seller')}
              className="hidden sm:flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Sell</span>
            </button>

            {/* User Actions */}
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={mockUser.avatar}
                    alt={mockUser.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="hidden sm:block text-left">
                    <div className="text-sm font-medium text-gray-900">{mockUser.name}</div>
                    {mockUser.membership && (
                      <div className="text-xs text-blue-600 font-medium">Premium Member</div>
                    )}
                  </div>
                </button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="text-sm font-medium text-gray-900">{mockUser.name}</div>
                      <div className="text-sm text-gray-500">{mockUser.email}</div>
                    </div>
                    <button 
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        onNavigate?.('profile');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Your Profile
                    </button>
                    <button 
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        onNavigate?.('profile');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Your Purchases
                    </button>
                    <button 
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        onNavigate?.('seller');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Seller Dashboard
                    </button>
                    <button 
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        onNavigate?.('profile');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Settings
                    </button>
                    <div className="border-t border-gray-100"></div>
                    <button 
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        onAuthClick?.();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-500"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigate?.('catalog');
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Browse
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigate?.('catalog');
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Web Developer
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigate?.('catalog');
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                App Developer
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigate?.('catalog');
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Data Analytics
              </button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigate?.('seller');
                }}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Start Selling</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};