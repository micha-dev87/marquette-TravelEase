import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple: reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison d'analyse. En savoir plus: https://bit.ly/CRA-vitals
reportWebVitals();
