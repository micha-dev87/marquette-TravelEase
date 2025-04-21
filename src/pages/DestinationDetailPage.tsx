import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import CarRentalCard from '../components/CarRentalCard';
import ActivityCard from '../components/ActivityCard';
import FlightCard from '../components/FlightCard';
import ReservationForm from '../components/ReservationForm';
import StickyReservationButton from '../components/StickyReservationButton';
import { destinations, Hotel, CarRental, Flight } from '../data/destinations-data';

const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>();
  const [selectedCar, setSelectedCar] = useState<CarRental | undefined>();
  const [selectedFlight, setSelectedFlight] = useState<Flight | undefined>();

  const destination = destinations.find(d => d.id === Number(id));

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800">Destination non trouvée</h1>
      </div>
    );
  }

  const handleReservationClick = () => {
    // Si un seul hôtel est disponible, le sélectionner automatiquement
    if (destination.hotels.length === 1) {
      setSelectedHotel(destination.hotels[0]);
    }
    // Si une seule voiture est disponible, la sélectionner automatiquement
    if (destination.carRentals.length === 1) {
      setSelectedCar(destination.carRentals[0]);
    }
    // Si un seul vol est disponible, le sélectionner automatiquement
    if (destination.flights.length === 1) {
      setSelectedFlight(destination.flights[0]);
    }
    setShowReservationForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Bannière de la destination */}
      <div className="relative h-96 w-full">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
            <p className="text-xl max-w-2xl mx-auto">{destination.description}</p>
          </div>
        </div>
      </div>

      {/* Contenu principal en grille */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section Hôtels */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Hôtels à {destination.name}</h2>
            <div className="flex flex-col gap-4">
              {destination.hotels.map(hotel => (
                <div key={hotel.id} className="flex flex-col bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <HotelCard hotel={hotel} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section Location de voitures */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Location de voitures</h2>
            <div className="flex flex-col gap-4">
              {destination.carRentals.map(car => (
                <div key={car.id} className="flex flex-col bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <CarRentalCard car={car} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section Activités */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Activités à {destination.name}</h2>
            <div className="flex flex-col gap-4">
              {destination.activities.map(activity => (
                <div key={activity.id} className="flex flex-col bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <ActivityCard activity={activity} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section Vols */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vols vers {destination.name}</h2>
            <div className="flex flex-col gap-4">
              {destination.flights.map(flight => (
                <div key={flight.id} className="bg-gray-50 rounded-lg p-4">
                  <FlightCard flight={flight} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Bouton de réservation sticky */}
      <StickyReservationButton onClick={handleReservationClick} />

      {/* Formulaire de réservation */}
      {showReservationForm && (
        <ReservationForm
          destination={destination}
          selectedHotel={selectedHotel}
          selectedCar={selectedCar}
          selectedFlight={selectedFlight}
          onClose={() => {
            setShowReservationForm(false);
            setSelectedHotel(undefined);
            setSelectedCar(undefined);
            setSelectedFlight(undefined);
          }}
        />
      )}
    </div>
  );
};

export default DestinationDetailPage; 