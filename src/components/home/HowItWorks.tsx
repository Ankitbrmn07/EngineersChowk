import React from 'react';
import { Search, Eye, Download } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'Search and filter through thousands of premium source code templates, components, and full applications.',
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Preview',
      description: 'View live demos, inspect code structure, read documentation, and check reviews from other developers.',
      color: 'green'
    },
    {
      icon: Download,
      title: 'Use',
      description: 'Purchase with confidence, download instantly, and integrate the code into your projects right away.',
      color: 'purple'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How EngineersChowk Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get from idea to implementation in three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600'
              };

              return (
                <div key={index} className="text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 lg:hidden">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]} rounded-2xl mb-6 relative z-10`}>
                    <Icon className="h-10 w-10 text-white" />
                    
                    {/* Step Number for Desktop */}
                    <div className="hidden lg:block absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of developers who trust EngineersChowk for their next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Browse Templates
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors">
                Become a Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};