import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

interface CarRentalCardProps {
  car: {
    id: number;
    model: string;
    brand: string;
    image: string;
    price: number;
    discount?: number;
    rating: number;
    reviews: number;
    features: string[];
    transmission: 'Automatique' | 'Manuelle';
    fuelType: 'Essence' | 'Diesel' | 'Électrique' | 'Hybride';
    seats: number;
  };
}

const CarRentalCard: React.FC<CarRentalCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-h3 font-semibold mb-2">{car.brand} {car.model}</h3>
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {Array.from({ length: car.rating }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-medium-gray">({car.reviews} avis)</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-very-light-gray rounded-full text-sm text-dark-gray">
                {car.transmission}
              </span>
              <span className="px-2 py-1 bg-very-light-gray rounded-full text-sm text-dark-gray">
                {car.fuelType}
              </span>
              <span className="px-2 py-1 bg-very-light-gray rounded-full text-sm text-dark-gray">
                {car.seats} places
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {car.features.map((feature, index) => (
                <span key={index} className="px-2 py-1 bg-very-light-gray rounded-full text-sm text-dark-gray">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          {car.discount && (
            <div className="text-right">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-adventure-green bg-opacity-10 text-adventure-green text-sm font-medium">
                -{car.discount}% off
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-medium-gray">
            {car.features.length} équipements inclus
          </div>
          <div className="text-right">
            {car.discount && (
              <div className="text-sm text-medium-gray line-through">${car.price + (car.price * car.discount / 100)}</div>
            )}
            <div className="text-h3 font-semibold text-dark-gray">${car.price}</div>
            <div className="text-sm text-medium-gray">Par jour</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalCard; 