import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Code, 
  Globe,
  Zap,
  Shield
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const stats = [
    { label: 'Active Developers', value: '15,000+', icon: Users },
    { label: 'Code Templates', value: '2,773', icon: Code },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Customer Satisfaction', value: '4.8/5', icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Every piece of code is carefully reviewed and tested before being published on our platform.'
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'Built by developers, for developers. We understand the challenges you face and create solutions that work.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly evolve our platform with the latest technologies and development practices.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your code and data are protected with enterprise-grade security measures.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Former Google engineer with 10+ years in developer tools',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO',
      bio: 'Full-stack architect passionate about developer experience',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Head of Quality',
      bio: 'PhD in Computer Science, expert in code quality and security',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Developers Worldwide
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              EngineersChowk is the premier marketplace where developers buy and sell high-quality 
              source code, templates, and components. We're building the future of collaborative development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We believe that great code should be accessible to everyone. Our mission is to create 
              a thriving ecosystem where developers can share their expertise, learn from each other, 
              and build amazing products together. Whether you're a college student learning to code 
              or a seasoned professional, EngineersChowk provides the tools and community you need to succeed.
            </p>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why We Started EngineersChowk</h3>
              <p className="text-gray-700 leading-relaxed">
                As developers ourselves, we experienced the frustration of rebuilding the same components 
                over and over again. We saw talented developers struggling to monetize their skills and 
                students unable to afford expensive development tools. EngineersChowk was born from the 
                idea that we could solve both problems by creating a marketplace that benefits everyone 
                in the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at EngineersChowk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate developers and entrepreneurs working to make coding more accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to buy quality code or sell your creations, 
            EngineersChowk is the place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Buying
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Start Selling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};