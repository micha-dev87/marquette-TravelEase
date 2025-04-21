import React from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import Layout from '../components/Layout';

// Données temporaires - À remplacer par une API
const hotels = [
  {
    id: 1,
    name: "Lakeside Motel Waterfront",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    rating: 4,
    price: 130,
    discount: 10,
    reviews: 1200,
    description: "Un petit verre de champagne à l'arrivée",
    amenities: ["Piscine", "Spa", "Restaurant"],
    rooms: [
      {
        id: 1,
        type: "Chambre Standard",
        price: 130,
        capacity: 2,
        features: ["Lit double", "TV", "Wi-Fi gratuit", "Salle de bain privée"]
      },
      {
        id: 2,
        type: "Suite Deluxe",
        price: 250,
        capacity: 4,
        features: ["Lit king size", "TV 4K", "Wi-Fi gratuit", "Salle de bain privée avec baignoire", "Vue sur le lac"]
      }
    ]
  }
];

const HotelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find(h => h.id === Number(id));

  if (!hotel) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Hôtel non trouvé</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={hotel.image} alt={hotel.name} className="w-full h-96 object-cover rounded-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {Array.from({ length: hotel.rating }).map((_, index) => (
                  <StarIcon key={index} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({hotel.reviews} avis)</span>
            </div>
            <p className="text-gray-700 mb-6">{hotel.description}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Équipements</h2>
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.map((amenity, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Chambres disponibles</h2>
              <div className="space-y-4">
                {hotel.rooms.map(room => (
                  <div key={room.id} className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">{room.type}</h3>
                    <p className="text-gray-600 mb-2">Capacité: {room.capacity} personnes</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${room.price}/nuit</span>
                      <button className="btn-primary">
                        Réserver
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HotelDetailPage; 