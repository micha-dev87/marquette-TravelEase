import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_TravelEase.png';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-very-light-gray py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center">
          <Link to="/" className="flex justify-center mb-8">
           <img src={logo} alt="logo" className="md:w-40 sm:w-32" />
          </Link>
          <h2 className="text-h2 font-montserrat font-bold text-dark-gray">
            Mot de passe oublié ?
          </h2>
          <p className="mt-2 text-sm text-medium-gray">
            Nous vous enverrons un lien pour réinitialiser votre mot de passe. Entrez l'adresse email utilisée pour TravelEase.
          </p>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-gray">
                Votre adresse email
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
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Envoyer le lien de réinitialisation
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="text-sm text-medium-gray text-center">
              En créant un compte, vous acceptez nos{' '}
              <Link to="/terms" className="text-ocean-blue hover:underline">
                Conditions d'utilisation
              </Link>{' '}
              et notre{' '}
              <Link to="/privacy" className="text-ocean-blue hover:underline">
                Politique de confidentialité
              </Link>
              .
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-medium-gray">
          Retourner à la{' '}
          <Link to="/login" className="font-medium text-ocean-blue hover:text-ocean-blue">
            page de connexion
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage; 