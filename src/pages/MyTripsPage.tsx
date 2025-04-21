import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, CalendarIcon, UserGroupIcon, MapPinIcon } from '@heroicons/react/24/outline';

/**
 * Page des voyages de l'utilisateur
 * Affiche les voyages à venir et les voyages passés
 */
const MyTripsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-very-light-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la page */}
        <div className="mb-8">
          <h1 className="text-h1 font-montserrat font-bold text-dark-gray">Mes voyages</h1>
          <p className="text-medium-gray mt-2">Gérez vos réservations et voyages à venir</p>
        </div>

        {/* Section des voyages à venir */}
        <div className="space-y-6">
          {/* Carte de réservation pour un voyage à venir */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image de l'hébergement */}
                <div className="md:w-1/4">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    alt="Lakeside Motel"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                {/* Informations détaillées de la réservation */}
                <div className="flex-1">
                  {/* Nom de l'hébergement et statut */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-h2 font-semibold text-dark-gray">Lakeside Motel Waterfront</h2>
                      <div className="flex items-center mt-2">
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-medium-gray">4.5 (1200 avis)</span>
                      </div>
                      <div className="flex items-center mt-2 text-medium-gray">
                        <MapPinIcon className="h-5 w-5 mr-2" />
                        <span>Lorem ipsum road, Terrium-2322, Melbourne, Australia</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-coral-red">Non remboursable</div>
                    </div>
                  </div>

                  {/* Détails du séjour: dates et voyageurs */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Date d'arrivée */}
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 text-ocean-blue mr-2" />
                      <div>
                        <div className="text-sm text-medium-gray">Check-in</div>
                        <div className="font-medium">Dimanche, 18 Mars 2024</div>
                      </div>
                    </div>
                    {/* Date de départ */}
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 text-ocean-blue mr-2" />
                      <div>
                        <div className="text-sm text-medium-gray">Check-out</div>
                        <div className="font-medium">Mardi, 20 Mars 2024</div>
                      </div>
                    </div>
                    {/* Informations sur les voyageurs et la chambre */}
                    <div className="flex items-center">
                      <UserGroupIcon className="h-5 w-5 text-ocean-blue mr-2" />
                      <div>
                        <div className="text-sm text-medium-gray">Voyageurs</div>
                        <div className="font-medium">2 nuits • 1 chambre</div>
                      </div>
                    </div>
                  </div>

                  {/* Prix total et actions disponibles */}
                  <div className="mt-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
                    <div>
                      <div className="text-sm text-medium-gray">Prix total</div>
                      <div className="text-h3 font-semibold text-dark-gray">$130</div>
                      <div className="text-sm text-medium-gray">Taxes et frais inclus</div>
                    </div>
                    {/* Boutons d'action */}
                    <div className="flex gap-4 mt-4 md:mt-0">
                      <Link
                        to="/trips/1/modify"
                        className="btn-secondary"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="/trips/1/details"
                        className="btn-primary"
                      >
                        Voir les détails
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Message affiché quand l'utilisateur n'a pas de voyages 
            Actuellement désactivé avec la condition {false && (...)} */}
        {false && (
          <div className="text-center py-12">
            <div className="text-h3 font-semibold text-dark-gray mb-4">
              Vous n'avez pas encore de voyages
            </div>
            <p className="text-medium-gray mb-6">
              Commencez à planifier votre prochain voyage dès maintenant
            </p>
            <Link to="/search" className="btn-primary">
              Explorer les destinations
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTripsPage; 