import React from 'react';

interface FlightCardProps {
  flight: {
    id: number;
    airline: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    price: number;
    discount?: number;
    class: 'Économique' | 'Premium' | 'Affaires' | 'Première';
    stops: number;
    baggageAllowance: string;
    amenities: string[];
  };
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-dark-gray">{flight.airline}</h3>
            <p className="text-sm text-gray-600">{flight.class}</p>
          </div>
          {flight.discount && (
            <span className="bg-orange-500 text-white text-sm font-medium px-2 py-1 rounded">
              -{flight.discount}%
            </span>
          )}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-600">Départ</p>
            <p className="font-medium">{flight.departureTime}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">{flight.duration}</p>
            <div className="w-16 h-px bg-gray-300 my-2"></div>
            <p className="text-xs text-gray-500">{flight.stops} escale{flight.stops > 1 ? 's' : ''}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Arrivée</p>
            <p className="font-medium">{flight.arrivalTime}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Bagages</p>
            <p className="text-sm font-medium">{flight.baggageAllowance}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Prix</p>
            <p className="text-lg font-bold text-orange-500">
              {flight.price}€
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard; 