import React, { useState } from 'react';
import { 
  Upload, 
  Image, 
  FileText, 
  DollarSign, 
  Tag, 
  Globe, 
  Smartphone, 
  BarChart3,
  X,
  Plus,
  Check,
  AlertCircle
} from 'lucide-react';

export const ProductUpload: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    techTags: [] as string[],
    price: '',
    licenseOptions: [
      { type: 'single', name: 'Single Project', description: 'Use in one commercial project', price: '' },
      { type: 'multiple', name: 'Multiple Projects', description: 'Use in unlimited projects', price: '' },
      { type: 'extended', name: 'Extended License', description: 'Resell as part of your product', price: '' }
    ],
    demoUrl: '',
    features: [''],
    compatibility: [''],
    dependencies: [''],
    version: '1.0.0'
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    sourceCode: null as File | null,
    thumbnail: null as File | null,
    screenshots: [] as File[],
    readme: null as File | null
  });

  const categories = [
    { id: 'web', name: 'Web Developer', icon: Globe },
    { id: 'app', name: 'App Developer', icon: Smartphone },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3 }
  ];

  const techTags = [
    'React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte',
    'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap',
    'Node.js', 'Express.js', 'FastAPI', 'Django', 'Flask', 'Spring Boot',
    'Flutter', 'React Native', 'Swift', 'Kotlin', 'Xamarin',
    'Python', 'R', 'SQL', 'PostgreSQL', 'MongoDB', 'Redis'
  ];

  const steps = [
    { id: 1, name: 'Basic Info', description: 'Product details and category' },
    { id: 2, name: 'Files & Media', description: 'Upload source code and images' },
    { id: 3, name: 'Pricing & License', description: 'Set pricing and license options' },
    { id: 4, name: 'Review & Publish', description: 'Final review before publishing' }
  ];

  const handleTagToggle = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      techTags: prev.techTags.includes(tag)
        ? prev.techTags.filter(t => t !== tag)
        : [...prev.techTags, tag]
    }));
  };

  const handleArrayFieldChange = (field: 'features' | 'compatibility' | 'dependencies', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayField = (field: 'features' | 'compatibility' | 'dependencies') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayField = (field: 'features' | 'compatibility' | 'dependencies', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleFileUpload = (field: keyof typeof uploadedFiles, files: FileList | null) => {
    if (!files) return;
    
    if (field === 'screenshots') {
      setUploadedFiles(prev => ({
        ...prev,
        screenshots: [...prev.screenshots, ...Array.from(files)]
      }));
    } else {
      setUploadedFiles(prev => ({
        ...prev,
        [field]: files[0]
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle product submission
    console.log('Submitting product:', { formData, uploadedFiles });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Upload New Product</h1>
          <p className="text-gray-600 mt-2">Share your code with the developer community</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-16 h-0.5 ml-4 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Modern React Dashboard Template"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your product, its features, and what makes it special..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <label
                        key={category.id}
                        className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.category === category.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="category"
                          value={category.id}
                          checked={formData.category === category.id}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="sr-only"
                        />
                        <Icon className="h-6 w-6 text-blue-600 mr-3" />
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Tech Stack</label>
                <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-4 border border-gray-200 rounded-lg">
                  {techTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        formData.techTags.includes(tag)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Selected: {formData.techTags.length} tags
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Version</label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1.0.0"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Files & Media</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Source Code (ZIP)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-sm text-gray-600 mb-2">
                    Drop your ZIP file here, or{' '}
                    <label className="text-blue-600 hover:text-blue-700 cursor-pointer">
                      browse
                      <input
                        type="file"
                        accept=".zip"
                        onChange={(e) => handleFileUpload('sourceCode', e.target.files)}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {uploadedFiles.sourceCode && (
                    <div className="text-sm text-green-600 font-medium">
                      ✓ {uploadedFiles.sourceCode.name}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Thumbnail Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-sm text-gray-600 mb-2">
                    Upload a preview image (recommended: 800x600px)
                  </div>
                  <label className="text-blue-600 hover:text-blue-700 cursor-pointer">
                    Choose Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('thumbnail', e.target.files)}
                      className="hidden"
                    />
                  </label>
                  {uploadedFiles.thumbnail && (
                    <div className="text-sm text-green-600 font-medium mt-2">
                      ✓ {uploadedFiles.thumbnail.name}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Screenshots (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-sm text-gray-600 mb-2">
                    Upload additional screenshots to showcase your product
                  </div>
                  <label className="text-blue-600 hover:text-blue-700 cursor-pointer">
                    Choose Images
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleFileUpload('screenshots', e.target.files)}
                      className="hidden"
                    />
                  </label>
                  {uploadedFiles.screenshots.length > 0 && (
                    <div className="text-sm text-green-600 font-medium mt-2">
                      ✓ {uploadedFiles.screenshots.length} images uploaded
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Demo URL (Optional)</label>
                <input
                  type="url"
                  value={formData.demoUrl}
                  onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://demo.yoursite.com"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Pricing & Licensing</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">License Options</label>
                <div className="space-y-4">
                  {formData.licenseOptions.map((license, index) => (
                    <div key={license.type} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{license.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">$</span>
                          <input
                            type="number"
                            value={license.price}
                            onChange={(e) => {
                              const newOptions = [...formData.licenseOptions];
                              newOptions[index].price = e.target.value;
                              setFormData({ ...formData, licenseOptions: newOptions });
                            }}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="49"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{license.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Features</label>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleArrayFieldChange('features', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Feature description"
                      />
                      {formData.features.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayField('features', index)}
                          className="p-2 text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField('features')}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Feature</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Compatibility</label>
                  <div className="space-y-2">
                    {formData.compatibility.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => handleArrayFieldChange('compatibility', index, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Chrome, Firefox, Safari"
                        />
                        {formData.compatibility.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayField('compatibility', index)}
                            className="p-2 text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayField('compatibility')}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Item</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Dependencies</label>
                  <div className="space-y-2">
                    {formData.dependencies.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => handleArrayFieldChange('dependencies', index, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="React 18+, Node.js 16+"
                        />
                        {formData.dependencies.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayField('dependencies', index)}
                            className="p-2 text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayField('dependencies')}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Dependency</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Review & Publish</h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-yellow-800">Before Publishing</h3>
                    <div className="text-sm text-yellow-700 mt-1">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Ensure your code is well-documented and tested</li>
                        <li>Include a comprehensive README file</li>
                        <li>Test all demo links and ensure they work</li>
                        <li>Verify all uploaded files are correct</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Product Summary</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Basic Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-gray-600">Title:</span> {formData.title || 'Not set'}</div>
                      <div><span className="text-gray-600">Category:</span> {formData.category || 'Not selected'}</div>
                      <div><span className="text-gray-600">Version:</span> {formData.version}</div>
                      <div><span className="text-gray-600">Tech Tags:</span> {formData.techTags.length} selected</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Files & Media</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-gray-600">Source Code:</span> {uploadedFiles.sourceCode ? '✓ Uploaded' : '✗ Missing'}</div>
                      <div><span className="text-gray-600">Thumbnail:</span> {uploadedFiles.thumbnail ? '✓ Uploaded' : '✗ Missing'}</div>
                      <div><span className="text-gray-600">Screenshots:</span> {uploadedFiles.screenshots.length} uploaded</div>
                      <div><span className="text-gray-600">Demo URL:</span> {formData.demoUrl || 'Not provided'}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-2">Pricing</h4>
                  <div className="space-y-2 text-sm">
                    {formData.licenseOptions.map((license) => (
                      <div key={license.type}>
                        <span className="text-gray-600">{license.name}:</span> ${license.price || '0'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-blue-800">Ready to Publish</h3>
                    <p className="text-sm text-blue-700 mt-1">
                      Your product will be reviewed by our team before going live. This usually takes 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              Previous
            </button>

            <div className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </div>

            {currentStep < steps.length ? (
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Publish Product
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};