# TravelEase - Application de Réservation de Voyage

TravelEase est une application web moderne de réservation de voyages développée avec React et TypeScript. Elle permet aux utilisateurs de rechercher, comparer et réserver des hôtels, des activités, des locations de voiture et des vols.

## Fonctionnalités

- 🔍 Recherche avancée de destinations
- 🏨 Réservation d'hôtels
- 🚗 Locations de voiture
- 🎯 Activités touristiques
- ✈️ Réservation de vols
- 📱 Interface responsive
- 🔒 Système d'authentification
- 💳 Paiement sécurisé

## Technologies Utilisées

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Heroicons
- React Query (pour la gestion des données)
- Formik & Yup (pour la validation des formulaires)

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/votre-username/travelease.git
cd travelease
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Créez un fichier `.env` à la racine du projet et ajoutez vos variables d'environnement :

```env
REACT_APP_API_URL=votre_url_api
REACT_APP_MAP_API_KEY=votre_clé_api
```

## Démarrage

Pour lancer l'application en mode développement :

```bash
npm start
# ou
yarn start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du Projet

```
src/
├── assets/          # Images et autres ressources statiques
├── components/      # Composants réutilisables
│   ├── Layout.tsx
│   ├── SearchBar.tsx
│   ├── HotelCard.tsx
│   ├── ActivityCard.tsx
│   ├── CarRentalCard.tsx
│   ├── FlightCard.tsx
│   └── ...
├── pages/          # Pages de l'application
│   ├── HomePage.tsx
│   ├── SearchPage.tsx
│   ├── LoginPage.tsx
│   └── ...
├── types/          # Définitions TypeScript
├── utils/          # Fonctions utilitaires
└── App.tsx         # Point d'entrée de l'application
```

## Scripts Disponibles

- `npm start` : Lance l'application en mode développement
- `npm build` : Construit l'application pour la production
- `npm test` : Lance les tests
- `npm lint` : Vérifie le code avec ESLint
- `npm format` : Formate le code avec Prettier

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter à contact@travelease.com
