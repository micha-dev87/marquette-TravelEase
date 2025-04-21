import React from 'react';
import HotelCard from './HotelCard';
import ActivityCard from './ActivityCard';
import CarRentalCard from './CarRentalCard';

/**
 * Interface de base pour tous les types de résultats de recherche
 */
export interface BaseResult {
  id: string;
  type: 'hotel' | 'activity' | 'car';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
}

/**
 * Interface pour les résultats de type hôtel
 */
export interface HotelResult extends BaseResult {
  type: 'hotel';
  name: string;
  description: string;
  amenities: string[];
}

/**
 * Interface pour les résultats de type activité
 */
export interface ActivityResult extends BaseResult {
  type: 'activity';
  name: string;
  description: string;
  duration: string;
  category: string;
  includes: string[];
}

/**
 * Interface pour les résultats de type location de voiture
 */
export interface CarResult extends BaseResult {
  type: 'car';
  model: string;
  brand: string;
  features: string[];
  transmission: 'Automatique' | 'Manuelle';
  fuelType: 'Essence' | 'Diesel' | 'Électrique' | 'Hybride';
  seats: number;
}

/**
 * Type union pour tous les types de résultats possibles
 */
type SearchResult = HotelResult | ActivityResult | CarResult;

/**
 * Props du composant SearchResults
 */
interface SearchResultsProps {
  results: SearchResult[];
  isLoading?: boolean;
  error?: string;
}

/**
 * Composant qui affiche les résultats de recherche
 * Gère l'affichage des états de chargement, d'erreur et de résultats vides
 * 
 * @param results - Liste des résultats à afficher
 * @param isLoading - Indique si les résultats sont en cours de chargement
 * @param error - Message d'erreur à afficher le cas échéant
 */
const SearchResults: React.FC<SearchResultsProps> = ({ results, isLoading = false, error }) => {
  // Affichage pendant le chargement
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Affichage quand aucun résultat n'est trouvé
  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Aucun résultat trouvé pour votre recherche.</p>
        <p className="text-gray-500 mt-2">Essayez de modifier vos critères de recherche.</p>
      </div>
    );
  }

  // Affichage des résultats dans une grille responsive
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((result) => {
        switch (result.type) {
          // Rendu des hôtels
          case 'hotel': {
            const hotel = result as HotelResult;
            return (
              <HotelCard
                key={hotel.id}
                hotel={{
                  id: parseInt(hotel.id),
                  name: hotel.name,
                  description: hotel.description,
                  price: hotel.price,
                  rating: hotel.rating,
                  image: hotel.image,
                  reviews: hotel.reviews,
                  amenities: hotel.amenities,
                  discount: hotel.discount
                }}
              />
            );
          }
          // Rendu des activités
          case 'activity': {
            const activity = result as ActivityResult;
            return (
              <ActivityCard
                key={activity.id}
                activity={{
                  id: parseInt(activity.id),
                  name: activity.name,
                  description: activity.description,
                  price: activity.price,
                  rating: activity.rating,
                  image: activity.image,
                  reviews: activity.reviews,
                  duration: activity.duration,
                  category: activity.category,
                  includes: activity.includes,
                  discount: activity.discount
                }}
              />
            );
          }
          // Rendu des locations de voiture
          case 'car': {
            const car = result as CarResult;
            return (
              <CarRentalCard
                key={car.id}
                car={{
                  id: parseInt(car.id),
                  model: car.model,
                  brand: car.brand,
                  price: car.price,
                  rating: car.rating,
                  image: car.image,
                  reviews: car.reviews,
                  features: car.features,
                  transmission: car.transmission,
                  fuelType: car.fuelType,
                  seats: car.seats,
                  discount: car.discount
                }}
              />
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
};

export default SearchResults; 