import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Edit, 
  Save, 
  X, 
  Github, 
  Linkedin, 
  Globe,
  Star,
  Download,
  Heart,
  Settings,
  CreditCard,
  Shield
} from 'lucide-react';
import { mockUser } from '../../data/mockData';

export const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: mockUser.name,
    bio: mockUser.bio || '',
    skills: mockUser.skills.join(', '),
    location: 'San Francisco, CA',
    website: 'https://johndeveloper.dev',
    github: 'johndeveloper',
    linkedin: 'johndeveloper'
  });

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'purchases', label: 'Purchases' },
    { id: 'favorites', label: 'Favorites' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'settings', label: 'Settings' }
  ];

  const purchases = [
    {
      id: '1',
      product: 'Modern E-commerce Dashboard',
      amount: 49,
      date: '2024-12-10',
      status: 'completed',
      downloadUrl: '/downloads/ecommerce-dashboard.zip'
    },
    {
      id: '2',
      product: 'Flutter Food Delivery App',
      amount: 79,
      date: '2024-12-05',
      status: 'completed',
      downloadUrl: '/downloads/flutter-food-app.zip'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 sm:h-48"></div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6">
              <div className="relative -mt-16 sm:-mt-20">
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover"
                />
                {mockUser.membership && (
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 p-2 rounded-full">
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 mt-4 sm:mt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{mockUser.name}</h1>
                    <p className="text-gray-600 mt-1">{mockUser.email}</p>
                    {mockUser.membership && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mt-2">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        Premium Member
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    >
                      {isEditing ? <X className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                      <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                    </button>
                    
                    {isEditing && (
                      <button
                        onClick={handleSave}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Save className="h-4 w-4" />
                        <span>Save</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Joined {new Date(mockUser.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Download className="h-4 w-4" />
                <span>12 Purchases</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="h-4 w-4" />
                <span>8 Favorites</span>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6">
              {isEditing ? (
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {mockUser.bio || 'No bio available'}
                </p>
              )}
            </div>

            {/* Skills */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Skills</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="React, Node.js, TypeScript..."
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {mockUser.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Statistics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-sm text-blue-600">Total Purchases</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">$487</div>
                      <div className="text-sm text-green-600">Total Spent</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600">8</div>
                      <div className="text-sm text-purple-600">Favorites</div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-600">5</div>
                      <div className="text-sm text-yellow-600">Reviews Written</div>
                    </div>
                  </div>
                </div>

                {mockUser.membership && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Membership Status</h3>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <Star className="h-5 w-5 text-yellow-600 fill-current" />
                            <span className="font-semibold text-yellow-800">Premium Member</span>
                          </div>
                          <p className="text-yellow-700 mt-1">
                            {mockUser.membership.discountPercentage}% off all purchases • {mockUser.membership.currentCredits} credits remaining
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-yellow-600">Renews on</div>
                          <div className="font-medium text-yellow-800">
                            {new Date(mockUser.membership.renewDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'purchases' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Purchase History</h3>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Download All Invoices
                  </button>
                </div>
                
                <div className="space-y-4">
                  {purchases.map((purchase) => (
                    <div key={purchase.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{purchase.product}</h4>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                            <span>${purchase.amount}</span>
                            <span>•</span>
                            <span>{purchase.date}</span>
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {purchase.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 mt-3 sm:mt-0">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View Invoice
                          </button>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="text-center py-12">
                <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
                <p className="text-gray-600 mb-6">Start browsing and save products you love</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Browse Products
                </button>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="text-center py-12">
                <Star className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
                <p className="text-gray-600 mb-6">Share your experience with products you've purchased</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  View Purchases
                </button>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">Personal Information</div>
                          <div className="text-sm text-gray-600">Update your name, email, and profile</div>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">Password & Security</div>
                          <div className="text-sm text-gray-600">Change password and security settings</div>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">Payment Methods</div>
                          <div className="text-sm text-gray-600">Manage your payment methods and billing</div>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Manage</button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Email Notifications</div>
                        <div className="text-sm text-gray-600">Receive updates about new products and sales</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Marketing Communications</div>
                        <div className="text-sm text-gray-600">Receive promotional emails and special offers</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};