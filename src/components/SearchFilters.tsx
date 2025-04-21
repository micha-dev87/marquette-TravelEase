import React from 'react';

interface FilterOption {
  id: string;
  label: string;
  value: string | number;
}

interface PriceRange {
  min: number;
  max: number;
}

interface SearchFiltersProps {
  selectedType: 'all' | 'hotel' | 'activity' | 'car';
  priceRange: PriceRange;
  rating: number;
  onTypeChange: (type: 'all' | 'hotel' | 'activity' | 'car') => void;
  onPriceRangeChange: (range: PriceRange) => void;
  onRatingChange: (rating: number) => void;
}

const typeOptions: FilterOption[] = [
  { id: 'all', label: 'Tout', value: 'all' },
  { id: 'hotel', label: 'Hôtels', value: 'hotel' },
  { id: 'activity', label: 'Activités', value: 'activity' },
  { id: 'car', label: 'Voitures', value: 'car' },
];

const ratingOptions: FilterOption[] = [
  { id: 'rating-0', label: 'Toutes les notes', value: 0 },
  { id: 'rating-3', label: '3+ étoiles', value: 3 },
  { id: 'rating-4', label: '4+ étoiles', value: 4 },
  { id: 'rating-5', label: '5 étoiles', value: 5 },
];

const SearchFilters: React.FC<SearchFiltersProps> = ({
  selectedType,
  priceRange,
  rating,
  onTypeChange,
  onPriceRangeChange,
  onRatingChange,
}) => {
  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const min = parseInt(e.target.value) || 0;
    onPriceRangeChange({ ...priceRange, min });
  };

  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = parseInt(e.target.value) || 0;
    onPriceRangeChange({ ...priceRange, max });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Filtres</h2>
      
      {/* Type de service */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Type de service</h3>
        <div className="space-y-2">
          {typeOptions.map((option) => (
            <label key={option.id} className="flex items-center">
              <input
                type="radio"
                name="type"
                value={option.value}
                checked={selectedType === option.value}
                onChange={() => onTypeChange(option.value as 'all' | 'hotel' | 'activity' | 'car')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Fourchette de prix */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Fourchette de prix</h3>
        <div className="flex space-x-4">
          <div>
            <label htmlFor="price-min" className="sr-only">Prix minimum</label>
            <input
              type="number"
              id="price-min"
              value={priceRange.min}
              onChange={handlePriceMinChange}
              placeholder="Min"
              className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center">
            <span className="text-gray-500">-</span>
          </div>
          <div>
            <label htmlFor="price-max" className="sr-only">Prix maximum</label>
            <input
              type="number"
              id="price-max"
              value={priceRange.max}
              onChange={handlePriceMaxChange}
              placeholder="Max"
              className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Note minimale */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Note minimale</h3>
        <div className="space-y-2">
          {ratingOptions.map((option) => (
            <label key={option.id} className="flex items-center">
              <input
                type="radio"
                name="rating"
                value={option.value}
                checked={rating === option.value}
                onChange={() => onRatingChange(option.value as number)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters; 