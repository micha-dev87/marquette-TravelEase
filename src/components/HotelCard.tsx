import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

interface HotelCardProps {
  hotel: {
    id: number;
    name: string;
    image: string;
    rating: number;
    price: number;
    discount?: number;
    reviews: number;
    description: string;
    amenities: string[];
  };
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-h3 font-semibold mb-2">{hotel.name}</h3>
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {Array.from({ length: hotel.rating }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-medium-gray">({hotel.reviews} avis)</span>
            </div>
            <p className="text-medium-gray mb-4">{hotel.description}</p>
            <div className="flex flex-wrap gap-2">
              {hotel.amenities.map((amenity, index) => (
                <span key={index} className="px-2 py-1 bg-very-light-gray rounded-full text-sm text-dark-gray">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          {hotel.discount && (
            <div className="text-right">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-adventure-green bg-opacity-10 text-adventure-green text-sm font-medium">
                -{hotel.discount}% off
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-medium-gray">
            {hotel.amenities.length} services inclus
          </div>
          <div className="text-right">
            {hotel.discount && (
              <div className="text-sm text-medium-gray line-through">${hotel.price + (hotel.price * hotel.discount / 100)}</div>
            )}
            <div className="text-h3 font-semibold text-dark-gray">${hotel.price}</div>
            <div className="text-sm text-medium-gray">Taxes et frais inclus</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard; 