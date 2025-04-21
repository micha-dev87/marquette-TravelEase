import React from 'react';
import { Destination, Hotel, CarRental, Flight } from '../data/destinations-data';

interface ReservationFormProps {
  destination: Destination;
  selectedHotel?: Hotel;
  selectedCar?: CarRental;
  selectedFlight?: Flight;
  onClose: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  destination,
  selectedHotel,
  selectedCar,
  selectedFlight,
  onClose,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter la logique de réservation
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-dark-gray">
            Réservation pour {destination.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-dark-gray">Informations personnelles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Prénom</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sun-orange focus:ring-sun-orange"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sun-orange focus:ring-sun-orange"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sun-orange focus:ring-sun-orange"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sun-orange focus:ring-sun-orange"
                />
              </div>
            </div>
          </div>

          {/* Hôtel */}
          {selectedHotel && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark-gray">Hôtel sélectionné</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{selectedHotel.name}</p>
                <p className="text-gray-600">{selectedHotel.description}</p>
                <p className="text-sun-orange font-semibold mt-2">
                  {selectedHotel.price}€/nuit
                  {selectedHotel.discount && (
                    <span className="text-gray-500 line-through ml-2">
                      {(selectedHotel.price * 100) / (100 - selectedHotel.discount)}€
                    </span>
                  )}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Dates de séjour</label>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <input
                    type="date"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sun-orange focus:ring-sun-orange"
                  />
                  <input
                    type="date"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sun-orange focus:ring-sun-orange"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Voiture */}
          {selectedCar && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark-gray">Voiture sélectionnée</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{selectedCar.brand} {selectedCar.model}</p>
                <p className="text-gray-600">
                  {selectedCar.transmission} - {selectedCar.fuelType} - {selectedCar.seats} places
                </p>
                <p className="text-sun-orange font-semibold mt-2">
                  {selectedCar.price}€/jour
                  {selectedCar.discount && (
                    <span className="text-gray-500 line-through ml-2">
                      {(selectedCar.price * 100) / (100 - selectedCar.discount)}€
                    </span>
                  )}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Dates de location</label>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <input
                    type="date"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sun-orange focus:ring-sun-orange"
                  />
                  <input
                    type="date"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sun-orange focus:ring-sun-orange"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Vol */}
          {selectedFlight && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark-gray">Vol sélectionné</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{selectedFlight.airline}</p>
                <p className="text-gray-600">
                  Départ: {selectedFlight.departureTime} - Arrivée: {selectedFlight.arrivalTime}
                </p>
                <p className="text-gray-600">
                  Durée: {selectedFlight.duration} - Classe: {selectedFlight.class}
                </p>
                <p className="text-sun-orange font-semibold mt-2">
                  {selectedFlight.price}€
                  {selectedFlight.discount && (
                    <span className="text-gray-500 line-through ml-2">
                      {(selectedFlight.price * 100) / (100 - selectedFlight.discount)}€
                    </span>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Boutons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-sun-orange text-white rounded-md hover:bg-orange-600"
            >
              Confirmer la réservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm; 