import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '@heroicons/react/24/outline';

/**
 * Composant de barre de recherche permettant aux utilisateurs de rechercher des hôtels, activités et locations de voiture.
 * 
 * @param className - Classes CSS additionnelles à appliquer au composant
 * @param initialQuery - Valeur initiale pour le champ de recherche
 * @param onSearch - Fonction de rappel appelée lors de la soumission du formulaire
 */
interface SearchBarProps {
  className?: string;
  initialQuery?: string;
  onSearch?: (query: string, startDate: string, endDate: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '', initialQuery = '', onSearch }) => {
  // État local pour les champs du formulaire
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  /**
   * Gère la soumission du formulaire de recherche
   * Si onSearch est fourni, l'appelle avec les paramètres
   * Sinon, navigue vers la page de recherche avec les paramètres dans l'URL
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSearch) {
      onSearch(searchQuery, startDate, endDate);
    } else {
      const queryParams = new URLSearchParams({
        q: searchQuery,
        startDate,
        endDate,
      });
      navigate(`/search?${queryParams.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`${className} bg-white rounded-lg shadow-sm p-4`}>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Champ de recherche principal */}
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Rechercher
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Hôtels, activités, locations de voiture..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Sélecteur de date de début */}
        <div className="flex-1">
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
            Date de début
          </label>
          <div className="relative">
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
            <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Sélecteur de date de fin */}
        <div className="flex-1">
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
            Date de fin
          </label>
          <div className="relative">
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate || new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
            <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Bouton de recherche */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-sun-orange text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Rechercher
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar; 