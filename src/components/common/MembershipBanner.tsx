import React from 'react';
import { Crown, Zap, Gift } from 'lucide-react';

export const MembershipBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6">
            <Crown className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Premium Access
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get unlimited access to premium templates, exclusive content, and developer tools
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">20% Off Everything</h3>
              <p className="text-blue-100">Save on every purchase with member pricing</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Monthly Credits</h3>
              <p className="text-blue-100">Get 3 free downloads every month</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Early Access</h3>
              <p className="text-blue-100">Be first to try new templates and features</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center sm:text-right">
              <div className="text-3xl font-bold">$19/month</div>
              <div className="text-blue-100">or $199/year (save 12%)</div>
            </div>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Start Free Trial
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mt-4">
            No commitment • Cancel anytime • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};