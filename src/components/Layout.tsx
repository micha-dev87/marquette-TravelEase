import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_TravelEase.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

/**
 * Interface définissant les propriétés du composant Layout
 * @property {React.ReactNode} children - Les éléments enfants à afficher dans le contenu principal
 */
interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Composant Layout qui définit la structure principale de l'application
 * Comprend une barre de navigation, une section principale et un pied de page
 * 
 * @param {LayoutProps} props - Les propriétés du composant
 * @returns {JSX.Element} Le composant Layout rendu
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ======== Navigation ======== */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-40 sm:h-30" />
              </Link>
            </div>
            
            {/* Liens de navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-dark-gray hover:text-ocean-blue">Accueil</Link>
              <Link to="/search" className="text-dark-gray hover:text-ocean-blue">Découvrir</Link>
              <Link to="/contact" className="text-dark-gray hover:text-ocean-blue">Nous Contacter</Link>
              <Link to="/my-trips" className="text-dark-gray hover:text-ocean-blue">Mes Voyages</Link>
              <Link to="/profile" className="text-dark-gray hover:text-ocean-blue">Mon Profil</Link>
            </div>
            
            {/* Boutons d'authentification - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/register" className="btn-secondary">S'inscrire</Link>
              <Link to="/login" className="btn-primary">Se connecter</Link>
            </div>

            {/* Bouton Hamburger - Mobile */}
            <div className="md:hidden flex items-center ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-dark-gray hover:text-ocean-blue"
              >
               
                  <Bars3Icon className="h-6 w-6" />
               
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Mobile - Popup */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Bouton de fermeture */}


          {/* Logo */}
          <div className="mb-8 flex justify-between items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="Logo" className="h-20" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-dark-gray hover:text-ocean-blue"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Liens de navigation */}
          <div className="flex flex-col space-y-4 mb-8">
            <Link
              to="/"
              className="text-dark-gray hover:text-ocean-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/search"
              className="text-dark-gray hover:text-ocean-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Découvrir
            </Link>
            <Link
              to="/contact"
              className="text-dark-gray hover:text-ocean-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Nous Contacter
            </Link>
            <Link
              to="/my-trips"
              className="text-dark-gray hover:text-ocean-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Mes Voyages
            </Link>
            <Link
              to="/profile"
              className="text-dark-gray hover:text-ocean-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Mon Profil
            </Link>
          </div>

          {/* Boutons d'authentification */}
          <div className="flex flex-col space-y-4">
            <Link
              to="/register"
              className="btn-secondary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              S'inscrire
            </Link>
            <Link
              to="/login"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Se connecter
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* ======== Contenu principal ======== */}
      <main className="flex-grow">
        {children}
      </main>

      {/* ======== Footer ======== */}
      <footer className="bg-dark-gray text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Informations de l'entreprise */}
            <div>
              <h3 className="text-h3 font-montserrat mb-4">TravelEase</h3>
              <p className="text-gray-300">Votre prochain compagnon de voyage</p>
            </div>
            
            {/* Liens d'entreprise */}
            <div>
              <h4 className="text-h4 font-montserrat mb-4">Entreprise</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">À propos</Link></li>
                <li><Link to="/jobs" className="text-gray-300 hover:text-white">Emplois</Link></li>
                <li><Link to="/press" className="text-gray-300 hover:text-white">Presse</Link></li>
              </ul>
            </div>
            
            {/* Liens d'exploration */}
            <div>
              <h4 className="text-h4 font-montserrat mb-4">Explorer</h4>
              <ul className="space-y-2">
                <li><Link to="/destinations/australia" className="text-gray-300 hover:text-white">Australie</Link></li>
                <li><Link to="/destinations/new-zealand" className="text-gray-300 hover:text-white">Nouvelle-Zélande</Link></li>
                <li><Link to="/destinations/greece" className="text-gray-300 hover:text-white">Grèce</Link></li>
              </ul>
            </div>
            
            {/* Liens d'aide */}
            <div>
              <h4 className="text-h4 font-montserrat mb-4">Aide</h4>
              <ul className="space-y-2">
                <li><Link to="/support" className="text-gray-300 hover:text-white">Support</Link></li>
                <li><Link to="/cancellation" className="text-gray-300 hover:text-white">Annulation</Link></li>
                <li><Link to="/refund" className="text-gray-300 hover:text-white">Remboursement</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-300">&copy; TravelEase 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 