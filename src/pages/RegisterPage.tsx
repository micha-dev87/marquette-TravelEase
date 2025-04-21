import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_TravelEase.png';

const RegisterPage: React.FC = () => {
  const [step, setStep] = useState(1);

  const StepOne = () => (
    <div>
      <div className="text-center">
        <h2 className="text-h2 font-montserrat font-bold text-dark-gray">
          S'inscrire
        </h2>
      </div>

      <form className="mt-8 space-y-6">
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

        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full btn-primary"
          >
            Continuer avec email
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-medium-gray">ou utiliser une de ces options</span>
            </div>
          </div>

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
      </form>
    </div>
  );

  const StepTwo = () => (
    <div>
      <div className="text-center">
        <h2 className="text-h2 font-montserrat font-bold text-dark-gray">
          Créer un mot de passe
        </h2>
        <p className="mt-2 text-sm text-medium-gray">
          Utilisez un minimum de 10 caractères avec des lettres majuscules, minuscules et des chiffres.
        </p>
      </div>

      <form className="mt-8 space-y-6">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-dark-gray">
            Mot de passe
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="input-field"
            />
          </div>
        </div>

        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-dark-gray">
            Confirmer le mot de passe
          </label>
          <div className="mt-1">
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
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
            Créer un compte
          </button>
        </div>

        <div className="text-sm text-medium-gray">
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
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-very-light-gray py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="flex justify-center">
            <img src={logo} alt="TravelEase" className="h-40 sm:h-30" />
          </Link>
        </div>

        <div className="bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
          {step === 1 ? <StepOne /> : <StepTwo />}
        </div>

        <p className="mt-8 text-center text-sm text-medium-gray">
          Vous avez déjà un compte ?{' '}
          <Link to="/login" className="font-medium text-ocean-blue hover:text-ocean-blue">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage; 