import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_TravelEase.png';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-very-light-gray py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center">
          <Link to="/" className="flex justify-center mb-8">
            <img src={logo} alt="TravelEase" className="h-40 sm:h-30" />
          </Link>
          <h2 className="text-h2 font-montserrat font-bold text-dark-gray">
            Se connecter
          </h2>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-gray">
                Adresse email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-dark-gray">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input-field"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-ocean-blue focus:ring-ocean-blue border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-medium-gray">
                  Rester connecté
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-ocean-blue hover:text-ocean-blue">
                  Mot de passe oublié ?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Continuer avec email
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-medium-gray">ou utiliser une de ces options</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-dark-gray hover:bg-gray-50"
              >
                <img
                  className="h-5 w-5 mr-2"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google logo"
                />
                <span>Continuer avec Google</span>
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-[#1877F2] text-sm font-medium text-white hover:bg-[#1874E8]"
              >
                <img
                  className="h-5 w-5 mr-2"
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook logo"
                />
                <span>Continuer avec Facebook</span>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-medium-gray">
          Vous n'avez pas de compte ?{' '}
          <Link to="/register" className="font-medium text-ocean-blue hover:text-ocean-blue">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage; 