import React, { useState } from 'react';
import { StarIcon, MapPinIcon, WifiIcon, TvIcon, TruckIcon } from '@heroicons/react/24/outline';

/**
 * Page de détail d'un produit (hébergement)
 * Affiche les informations détaillées d'un hébergement avec galerie d'images,
 * description, avis et formulaire de réservation
 */
const ProductDetailPage: React.FC = () => {
  // État pour gérer l'onglet sélectionné dans la section d'informations
  const [selectedTab, setSelectedTab] = useState('overview');

  // Liste des images pour la galerie
  const images = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b'
  ];

  return (
    <div className="min-h-screen bg-very-light-gray">
      {/* Galerie d'images - Affiche les photos de l'hébergement en grille */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-white">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contenu principal - Informations sur l'hébergement */}
          <div className="flex-1">
            {/* Section d'en-tête avec nom, évaluation et localisation */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-h1 font-montserrat font-bold text-dark-gray mb-2">
                    Lakeside Motel Waterfront
                  </h1>
                  <div className="flex items-center gap-4 text-medium-gray">
                    {/* Affichage de la note et du nombre d'avis */}
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1">4.5</span>
                      <span className="ml-1">(1200 avis)</span>
                    </div>
                    {/* Affichage de l'adresse */}
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5" />
                      <span className="ml-1">Lorem ipsum road, Terrium-2322, Melbourne, Australia</span>
                    </div>
                  </div>
                </div>
                {/* Badge de promotion */}
                <div className="text-right">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-adventure-green bg-opacity-10 text-adventure-green text-sm font-medium">
                    -10% off
                  </div>
                </div>
              </div>

              {/* Navigation par onglets pour les différentes sections d'information */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  {['overview', 'amenities', 'reviews', 'location'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        selectedTab === tab
                          ? 'border-ocean-blue text-ocean-blue'
                          : 'border-transparent text-medium-gray hover:text-dark-gray hover:border-gray-300'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contenu des onglets - Affiche le contenu en fonction de l'onglet sélectionné */}
              <div className="py-6">
                {selectedTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Description générale de l'hébergement */}
                    <p className="text-medium-gray">
                      Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes
                      Entrance, 19 mi from Bairnsdale. Free parking is available on site.
                    </p>
                    {/* Équipements principaux avec icônes */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <WifiIcon className="h-5 w-5 text-ocean-blue" />
                        <span>WiFi gratuit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TvIcon className="h-5 w-5 text-ocean-blue" />
                        <span>TV écran plat</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TruckIcon className="h-5 w-5 text-ocean-blue" />
                        <span>Parking gratuit</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Section des avis clients */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-h2 font-semibold mb-6">Avis des clients</h2>
              <div className="space-y-6">
                {/* Liste des avis clients */}
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {/* Nom de l'utilisateur */}
                        <h3 className="font-semibold text-dark-gray">John Doe</h3>
                        <div className="flex items-center mt-1">
                          {/* Étoiles de notation */}
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <StarIcon key={index} className="h-4 w-4 text-yellow-400" />
                            ))}
                          </div>
                          {/* Date de l'avis */}
                          <span className="ml-2 text-sm text-medium-gray">il y a 2 jours</span>
                        </div>
                      </div>
                    </div>
                    {/* Contenu de l'avis */}
                    <p className="text-medium-gray">
                      Excellent séjour ! La vue sur le lac est magnifique et le personnel est très attentionné.
                      Les chambres sont propres et bien équipées.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carte de réservation - Formulaire pour réserver l'hébergement */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              {/* En-tête avec prix et évaluation */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  {/* Affichage du prix avec réduction */}
                  <div className="text-sm text-medium-gray line-through">$150</div>
                  <div className="text-h2 font-semibold text-dark-gray">$130</div>
                  <div className="text-sm text-medium-gray">par nuit</div>
                </div>
                {/* Affichage de la note moyenne */}
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 font-semibold">4.5</span>
                  <span className="ml-1 text-medium-gray">(1200 avis)</span>
                </div>
              </div>

              {/* Formulaire de réservation */}
              <form className="space-y-4">
                {/* Sélection des dates de séjour */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-1">
                      Check-in
                    </label>
                    <input type="date" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-1">
                      Check-out
                    </label>
                    <input type="date" className="input-field" />
                  </div>
                </div>

                {/* Sélection du nombre de voyageurs */}
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-1">
                    Voyageurs
                  </label>
                  <select className="input-field">
                    <option>2 adultes</option>
                    <option>1 adulte</option>
                    <option>3 adultes</option>
                    <option>4 adultes</option>
                  </select>
                </div>

                {/* Récapitulatif des coûts */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <span>$130 x 2 nuits</span>
                    <span>$260</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Réduction</span>
                    <span className="text-adventure-green">-$26</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes et frais</span>
                    <span>$30</span>
                  </div>
                  {/* Total final */}
                  <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>$264</span>
                  </div>
                </div>

                {/* Bouton de réservation */}
                <button type="submit" className="w-full btn-primary">
                  Réserver maintenant
                </button>
              </form>

              {/* Message informatif sur le paiement */}
              <p className="mt-4 text-sm text-medium-gray text-center">
                Vous ne serez pas débité pour le moment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 