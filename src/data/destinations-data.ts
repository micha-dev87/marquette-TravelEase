// Types pour les données
export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  hotels: Hotel[];
  carRentals: CarRental[];
  activities: Activity[];
  flights: Flight[];
}

export interface Hotel {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  discount?: number;
  reviews: number;
  description: string;
  amenities: string[];
}

export interface CarRental {
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
}

export interface Activity {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  rating: number;
  reviews: number;
  description: string;
  duration: string;
  category: string;
  includes: string[];
}

export interface Flight {
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
}

// Données des destinations
export const destinations: Destination[] = [
  {
    id: 1,
    name: "Melbourne",
    image: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Ville cosmopolite avec une scène culturelle vibrante",
    hotels: [
      {
        id: 1,
        name: "Lakeside Motel Waterfront",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4,
        price: 130,
        discount: 10,
        reviews: 1200,
        description: "Un petit verre de champagne à l'arrivée",
        amenities: ["Piscine", "Spa", "Restaurant"]
      }
    ],
    carRentals: [
      {
        id: 1,
        model: "Toyota Camry",
        brand: "Toyota",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 50,
        rating: 4.5,
        reviews: 200,
        features: ["Climatisation", "GPS", "Bluetooth"],
        transmission: "Automatique",
        fuelType: "Essence",
        seats: 5
      }
    ],
    activities: [
      {
        id: 1,
        name: "Visite guidée de la ville",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 45,
        rating: 4.8,
        reviews: 150,
        description: "Découvrez les secrets de Melbourne",
        duration: "3 heures",
        category: "Visite guidée",
        includes: ["Guide local", "Transport", "Collation"]
      }
    ],
    flights: [
      {
        id: 1,
        airline: "Qantas",
        departureTime: "08:00",
        arrivalTime: "10:30",
        duration: "2h30",
        price: 250,
        class: "Économique",
        stops: 0,
        baggageAllowance: "23kg",
        amenities: ["Repas", "Boissons", "Divertissement"]
      }
    ]
  },
  {
    id: 2,
    name: "Sydney",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Ville emblématique avec son opéra et son pont",
    hotels: [
      {
        id: 2,
        name: "Harbour View Hotel",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.5,
        price: 180,
        discount: 15,
        reviews: 950,
        description: "Vue imprenable sur l'opéra de Sydney",
        amenities: ["Piscine", "Restaurant", "Spa", "Gym"]
      },
      {
        id: 3,
        name: "Bondi Beach Resort",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4.2,
        price: 150,
        reviews: 750,
        description: "À quelques pas de la célèbre plage de Bondi",
        amenities: ["Piscine", "Bar", "Plage privée"]
      }
    ],
    carRentals: [
      {
        id: 2,
        model: "Honda CR-V",
        brand: "Honda",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 65,
        rating: 4.3,
        reviews: 180,
        features: ["Climatisation", "GPS", "Bluetooth", "Sièges chauffants"],
        transmission: "Automatique",
        fuelType: "Hybride",
        seats: 5
      },
      {
        id: 3,
        model: "Tesla Model 3",
        brand: "Tesla",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 90,
        rating: 4.8,
        reviews: 120,
        features: ["Climatisation", "GPS", "Bluetooth", "Autopilot"],
        transmission: "Automatique",
        fuelType: "Électrique",
        seats: 5
      }
    ],
    activities: [
      {
        id: 2,
        name: "Visite de l'Opéra de Sydney",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 60,
        rating: 4.9,
        reviews: 250,
        description: "Découvrez l'architecture emblématique de l'Opéra",
        duration: "2 heures",
        category: "Visite culturelle",
        includes: ["Guide local", "Billet d'entrée", "Audio-guide"]
      },
      {
        id: 3,
        name: "Croisière dans le port",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 75,
        rating: 4.7,
        reviews: 180,
        description: "Admirez Sydney depuis la mer",
        duration: "3 heures",
        category: "Croisière",
        includes: ["Guide", "Repas", "Boissons"]
      }
    ],
    flights: [
      {
        id: 2,
        airline: "Virgin Australia",
        departureTime: "09:30",
        arrivalTime: "12:00",
        duration: "2h30",
        price: 280,
        class: "Premium",
        stops: 0,
        baggageAllowance: "30kg",
        amenities: ["Repas", "Boissons", "Divertissement", "WiFi"]
      },
      {
        id: 3,
        airline: "Qantas",
        departureTime: "14:00",
        arrivalTime: "16:30",
        duration: "2h30",
        price: 220,
        discount: 10,
        class: "Économique",
        stops: 0,
        baggageAllowance: "23kg",
        amenities: ["Repas", "Boissons", "Divertissement"]
      }
    ]
  }
]; 