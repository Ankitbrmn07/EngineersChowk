import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';

export const TrustSignals: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Every piece of code is reviewed by our expert team before going live'
    },
    {
      icon: Award,
      title: 'Top Rated Sellers',
      description: 'Work with verified developers with proven track records'
    },
    {
      icon: Users,
      title: 'Student Friendly',
      description: 'Special pricing and support for students and new developers'
    },
    {
      icon: Zap,
      title: 'Instant Download',
      description: 'Get your code immediately after purchase with lifetime access'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Developers Trust Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built a platform that prioritizes quality, trust, and developer success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-6">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.8%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">30 Days</div>
              <div className="text-gray-600">Refund Policy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};