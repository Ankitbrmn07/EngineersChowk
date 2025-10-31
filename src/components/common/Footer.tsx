import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Engineers<span className="text-blue-400">Chowk</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              The marketplace for developers to buy and sell high-quality source code, templates, and components.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UI Components</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Templates</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><button onClick={() => window.location.href = '#'} className="text-gray-300 hover:text-white transition-colors">Help Center</button></li>
              <li><button onClick={() => window.location.href = '#contact'} className="text-gray-300 hover:text-white transition-colors">Contact Us</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Licensing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Sellers</h4>
            <ul className="space-y-2">
              <li><button onClick={() => window.location.href = '#upload'} className="text-gray-300 hover:text-white transition-colors">Start Selling</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Seller Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Payout Information</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Quality Standards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 EngineersChowk. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button onClick={() => window.location.href = '#about'} className="text-gray-300 hover:text-white transition-colors">About Us</button>
              <button onClick={() => window.location.href = '#contact'} className="text-gray-300 hover:text-white transition-colors">Contact</button>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};