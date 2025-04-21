import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/SearchFilters';
import HotelCard from '../components/HotelCard';
import ActivityCard from '../components/ActivityCard';
import CarRentalCard from '../components/CarRentalCard';
import SearchResults from '../components/SearchResults';
import SearchPagination from '../components/SearchPagination';
import { destinations } from '../data/destinations-data';

/**
 * Nombre d'éléments à afficher par page pour la pagination
 */
const ITEMS_PER_PAGE = 9;

/**
 * Composant principal de la page de recherche
 * Permet aux utilisateurs de rechercher, filtrer et trier des hôtels, activités et locations de voiture
 */
const SearchPage: React.FC = () => {
  // État pour les paramètres de recherche dans l'URL
  const [searchParams, setSearchParams] = useSearchParams();
  
  // État pour le type de résultat sélectionné (hôtel, activité, voiture ou tous)
  const [selectedType, setSelectedType] = useState<'all' | 'hotel' | 'activity' | 'car'>('all');
  
  // État pour la fourchette de prix sélectionnée
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  
  // État pour la note minimale sélectionnée
  const [rating, setRating] = useState(0);
  
  // État pour la page courante de la pagination
  const [currentPage, setCurrentPage] = useState(1);
  
  // État pour le critère de tri sélectionné
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended');

  /**
   * Convertit les données des destinations en résultats de recherche uniformes
   * Utilise useMemo pour éviter des calculs inutiles lors des re-rendus
   */
  const allResults = useMemo(() => {
    const results: any[] = [];

    destinations.forEach(destination => {
      // Ajouter les hôtels
      destination.hotels.forEach(hotel => {
        results.push({
          id: `hotel-${hotel.id}`,
          type: 'hotel',
          name: hotel.name,
          description: hotel.description,
          price: hotel.price,
          rating: hotel.rating,
          image: hotel.image,
          reviews: hotel.reviews,
          amenities: hotel.amenities,
          discount: hotel.discount,
          location: destination.name
        });
      });

      // Ajouter les activités
      destination.activities.forEach(activity => {
        results.push({
          id: `activity-${activity.id}`,
          type: 'activity',
          name: activity.name,
          description: activity.description,
          price: activity.price,
          rating: activity.rating,
          image: activity.image,
          reviews: activity.reviews,
          duration: activity.duration,
          category: activity.category,
          includes: activity.includes,
          discount: activity.discount,
          location: destination.name
        });
      });

      // Ajouter les locations de voiture
      destination.carRentals.forEach(car => {
        results.push({
          id: `car-${car.id}`,
          type: 'car',
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
          discount: car.discount,
          location: destination.name
        });
      });
    });

    return results;
  }, [destinations]);

  /**
   * Filtre et trie les résultats selon les critères sélectionnés
   * Utilise useMemo pour éviter des calculs inutiles lors des re-rendus
   */
  const filteredResults = useMemo(() => {
    let results = [...allResults];

    // Filtrer par type
    if (selectedType !== 'all') {
      results = results.filter(result => result.type === selectedType);
    }

    // Filtrer par prix
    results = results.filter(
      result => result.price >= priceRange.min && result.price <= priceRange.max
    );

    // Filtrer par note
    if (rating > 0) {
      results = results.filter(result => result.rating >= rating);
    }

    // Trier les résultats
    switch (sortBy) {
      case 'price-asc':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Par défaut, tri par pertinence (recommandé)
        results.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews);
    }

    return results;
  }, [allResults, selectedType, priceRange, rating, sortBy]);

  /**
   * Calcule les informations de pagination
   */
  const totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);
  const paginatedResults = filteredResults.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /**
   * Gère la soumission du formulaire de recherche
   * Met à jour les paramètres d'URL et réinitialise la pagination
   */
  const handleSearch = (query: string, location: string, dates: string) => {
    setSearchParams({ q: query, location, dates });
    setCurrentPage(1);
  };

  /**
   * Gère le changement de critère de tri
   * Met à jour l'état et réinitialise la pagination
   */
  const handleSortChange = (value: string) => {
    setSortBy(value as 'recommended' | 'price-asc' | 'price-desc' | 'rating');
    setCurrentPage(1);
  };

  /**
   * Gère le changement de page
   * Met à jour l'état et fait défiler la page vers le haut
   */
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Rendu du composant principal
   * Affiche la barre de recherche, les filtres, les résultats par destination et la pagination
   */
  return (
    <div className="min-h-screen bg-very-light-gray">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Barre de recherche */}
        <SearchBar
          initialQuery={searchParams.get('q') || ''}
          className="w-full mb-8"
          onSearch={handleSearch}
        />

        {/* Sélecteur de tri */}
        <div className="mb-4 flex justify-end">
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="input-field w-48"
          >
            <option value="recommended">Recommandé</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="rating">Mieux notés</option>
          </select>
        </div>

        {/* Affichage des résultats */}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <SearchFilters
              selectedType={selectedType}
              priceRange={priceRange}
              rating={rating}
              onTypeChange={setSelectedType}
              onPriceRangeChange={setPriceRange}
              onRatingChange={setRating}
            />
          </div>

          {/* Résultats par destination */}
          <div className="flex-1">
            {destinations.map((destination) => {
              // Filtrer les services de la destination selon les critères
              const filteredServices = {
                hotels: destination.hotels.filter(hotel => 
                  hotel.price >= priceRange.min && 
                  hotel.price <= priceRange.max && 
                  hotel.rating >= rating
                ),
                activities: destination.activities.filter(activity => 
                  activity.price >= priceRange.min && 
                  activity.price <= priceRange.max && 
                  activity.rating >= rating
                ),
                carRentals: destination.carRentals.filter(car => 
                  car.price >= priceRange.min && 
                  car.price <= priceRange.max && 
                  car.rating >= rating
                ),
              };

              // Vérifier si la destination a des services correspondant au type sélectionné
              const hasMatchingServices = 
                (selectedType === 'all' || selectedType === 'hotel') && filteredServices.hotels.length > 0 ||
                (selectedType === 'all' || selectedType === 'activity') && filteredServices.activities.length > 0 ||
                (selectedType === 'all' || selectedType === 'car') && filteredServices.carRentals.length > 0;
              
              // Si aucun service correspondant au type sélectionné, ne pas afficher la destination

              if (!hasMatchingServices) return null;

              // Rendu de la destination
              return (
                <div key={destination.id} className="mb-8 bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-dark-gray mb-4">{destination.name}</h2>
                  <p className="text-gray-600 mb-6">{destination.description}</p>

                  {/*contenu de la destination*/}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    {/* Hôtels */}
                    {filteredServices.hotels.length > 0 && (
                      <div className="mb-6 w-full p-4">
                        <h3 className="text-xl font-semibold text-dark-gray mb-4">Hôtels</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {filteredServices.hotels.map(hotel => (
                            <div key={hotel.id} className="h-full">
                              <HotelCard hotel={hotel} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Activités */}
                    {filteredServices.activities.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-dark-gray mb-4">Activités</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {filteredServices.activities.map(activity => (
                            <div key={activity.id} className="h-full">
                              <ActivityCard activity={activity} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Locations de voiture */}
                    {filteredServices.carRentals.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-dark-gray mb-4">Locations de voiture</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {filteredServices.carRentals.map(car => (
                            <div key={car.id} className="h-full">
                              <CarRentalCard car={car} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bouton pour la reservation */}
                  <div className="flex justify-start">
                    <Link to={`/destination/${destination.id}`} className="bg-sun-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                      Voir la destination
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage; 