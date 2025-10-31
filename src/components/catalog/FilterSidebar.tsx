import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { FilterOptions } from '../../types';
import { categories, techTags } from '../../data/mockData';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    techStack: true,
    price: true,
    rating: true,
    features: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    onFilterChange({
      ...filters,
      category: filters.category === categoryId ? undefined : categoryId
    });
  };

  const handleTechTagChange = (tag: string) => {
    const currentTags = filters.techTags || [];
    const updatedTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    
    onFilterChange({
      ...filters,
      techTags: updatedTags.length > 0 ? updatedTags : undefined
    });
  };

  const handlePriceChange = (range: [number, number]) => {
    onFilterChange({
      ...filters,
      priceRange: range
    });
  };

  const handleRatingChange = (rating: number) => {
    onFilterChange({
      ...filters,
      rating: filters.rating === rating ? undefined : rating
    });
  };

  const clearAllFilters = () => {
    onFilterChange({});
  };

  const FilterSection: React.FC<{ title: string; section: string; children: React.ReactNode }> = ({ 
    title, 
    section, 
    children 
  }) => (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => toggleSection(section)}
        className="flex items-center justify-between w-full text-left py-2"
      >
        <span className="text-sm font-medium text-gray-900">{title}</span>
        {expandedSections[section as keyof typeof expandedSections] ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>
      {expandedSections[section as keyof typeof expandedSections] && (
        <div className="mt-2">{children}</div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>
        <button
          onClick={clearAllFilters}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {/* Category Filter */}
        <FilterSection title="Category" section="category">
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category.id}
                  onChange={() => handleCategoryChange(category.id)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                <span className="ml-auto text-xs text-gray-500">
                  {category.productCount.toLocaleString()}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Tech Stack Filter */}
        <FilterSection title="Tech Stack" section="techStack">
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {techTags.slice(0, 20).map((tag) => (
              <label key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  checked={(filters.techTags || []).includes(tag)}
                  onChange={() => handleTechTagChange(tag)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{tag}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Price Filter */}
        <FilterSection title="Price Range" section="price">
          <div className="space-y-2">
            {[
              { label: 'Under $25', range: [0, 24] as [number, number] },
              { label: '$25 - $50', range: [25, 50] as [number, number] },
              { label: '$51 - $100', range: [51, 100] as [number, number] },
              { label: '$101 - $200', range: [101, 200] as [number, number] },
              { label: 'Over $200', range: [201, 999999] as [number, number] }
            ].map((option) => (
              <label key={option.label} className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  checked={
                    filters.priceRange?.[0] === option.range[0] && 
                    filters.priceRange?.[1] === option.range[1]
                  }
                  onChange={() => handlePriceChange(option.range)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Rating Filter */}
        <FilterSection title="Rating" section="rating">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === rating}
                  onChange={() => handleRatingChange(rating)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <div className="ml-2 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-700 ml-1">& up</span>
                </div>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Additional Features */}
        <FilterSection title="Features" section="features">
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.studentFriendly || false}
                onChange={(e) => onFilterChange({
                  ...filters,
                  studentFriendly: e.target.checked || undefined
                })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Student Friendly</span>
            </label>
          </div>
        </FilterSection>
      </div>
    </div>
  );
};