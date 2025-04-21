import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

/**
 * Composant de la page d'accueil
 * Affiche la section héro, la barre de recherche, les destinations populaires et les informations COVID
 */
const HomePage: React.FC = () => {
  return (
    <div>
      {/* 
       * Section Héro
       * Affiche une image de fond attrayante avec un titre accrocheur et une description
       * Inclut la barre de recherche principale pour commencer la planification du voyage
       */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bénéficiez de vos vacances de rêve
          </h1>
          <p className="text-xl text-white mb-12">
            Planifiez et réservez votre voyage parfait avec nos conseils d'experts
          </p>

          {/* 
           * Barre de recherche
           * Permet aux utilisateurs de saisir leur destination, dates et nombre de voyageurs
           * Responsive: s'adapte aux différentes tailles d'écran
           */}
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Où allez-vous ?"
                  className="input-field pl-10"
                />
              </div>
              <div className="relative">
                <CalendarIcon className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="date"
                  className="input-field pl-10"
                />
              </div>
              <div className="relative">
                <CalendarIcon className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="date"
                  className="input-field pl-10"
                />
              </div>
              <div className="relative">
                <UserGroupIcon className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" />
                <select className="input-field pl-10">
                  <option>2 voyageurs</option>
                  <option>1 voyageur</option>
                  <option>3 voyageurs</option>
                  <option>4+ voyageurs</option>
                </select>
              </div>
            </div>
            <button className="w-full md:w-auto btn-primary mt-4">
              Rechercher
            </button>
          </div>
        </div>
      </div>

      {/* 
       * Section Destinations Populaires
       * Présente une grille de cartes cliquables pour les destinations les plus recherchées
       * Chaque carte affiche une image, le nom du pays et le nombre de propriétés disponibles
       */}
      <section className="py-16 bg-very-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Destinations populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Australie - Carte de destination avec effet de survol */}
            <Link to="/search?destination=australia" className="group">
              <div className="card-container overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be"
                    alt="Australia"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-h3 font-semibold mb-2">Australie</h3>
                <p className="text-medium-gray">2246 propriétés</p>
              </div>
            </Link>

            {/* Japon - Carte de destination avec effet de survol */}
            <Link to="/search?destination=japan" className="group">
              <div className="card-container overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
                    alt="Japan"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-h3 font-semibold mb-2">Japon</h3>
                <p className="text-medium-gray">1278 propriétés</p>
              </div>
            </Link>

            {/* Nouvelle-Zélande - Carte de destination avec effet de survol */}
            <Link to="/search?destination=new-zealand" className="group">
              <div className="card-container overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1469521669194-babb45599def"
                    alt="New Zealand"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-h3 font-semibold mb-2">Nouvelle-Zélande</h3>
                <p className="text-medium-gray">480 propriétés</p>
              </div>
            </Link>

            {/* Grèce - Carte de destination avec effet de survol */}
            <Link to="/search?destination=greece" className="group">
              <div className="card-container overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077"
                    alt="Greece"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-h3 font-semibold mb-2">Grèce</h3>
                <p className="text-medium-gray">320 propriétés</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 
       * Notification COVID-19
       * Alerte informative sur les restrictions de voyage liées à la pandémie
       * Inclut un lien pour plus d'informations
       */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 mx-auto max-w-7xl">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Vérifiez les dernières restrictions de voyage liées au COVID-19 avant de réserver.{' '}
              <a href="#" className="font-medium underline text-yellow-700 hover:text-yellow-600">
                En savoir plus
              </a>
            </p>
          </div>
        </div>
      </div>


      {/*Meilleurs hôtels*/}
      <section className="py-16 bg-very-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Meilleurs hôtels</h2>

       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Hôtel New York */}
          <Link to="/search?hotel=new-york" className="group">
          <div className="card-container overflow-hidden">
            <div className="relative h-48 mb-4">
                <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" alt="Hôtel 1" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                
                </div>
                <h3 className="text-h3 font-semibold mb-2">Hôtel New York</h3>
                <p className="text-medium-gray">1452 propriétés</p>    
              </div>
            </Link>

            {/* Hôtel Japon */}
            <Link to="/search?hotel=japon" className="group">
              <div className="card-container overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186" alt="Hôtel Japon" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-h3 font-semibold mb-2">Hôtel Japon</h3>
                <p className="text-medium-gray">1876 propriétés</p>
              </div>
            </Link>

            {/* Hôtel Australie */}
            <Link to="/search?hotel=australie" className="group">
              <div className="card-container overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" alt="Hôtel Australie" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-h3 font-semibold mb-2">Hôtel Australie</h3>
                <p className="text-medium-gray">1543 propriétés</p>
              </div>
            </Link>

            {/* Hôtel Nouvelle-Zélande */}
            <Link to="/search?hotel=nouvelle-zelande" className="group">
              <div className="card-container overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad" alt="Hôtel Nouvelle-Zélande" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-h3 font-semibold mb-2">Hôtel Nouvelle-Zélande</h3>
                <p className="text-medium-gray">982 propriétés</p>
              </div>
            </Link>

            {/* Hôtel Grèce */}
            <Link to="/search?hotel=grece" className="group">
              <div className="card-container overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713" alt="Hôtel Grèce" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-h3 font-semibold mb-2">Hôtel Grèce</h3>
                <p className="text-medium-gray">1328 propriétés</p>
              </div>
            </Link>

            
            
        </div>


          
        </div>
      </section>


      {/* créer une section pour les activités  */}
      <section className="py-16 bg-very-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Activités</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Activité 1 */}
            <Link to="/search?activity=plage" className="group">
              <div className="card-container overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Plages" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-h3 font-semibold mb-2">Plages</h3>
                <p className="text-medium-gray">1234 propriétés</p>
              </div>
            </Link>
          </div>
        

        </div>
      </section>
    </div>
  );
};

export default HomePage; 