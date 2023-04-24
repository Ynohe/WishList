import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-u7vnf7gyzvu8fu0d.us.auth0.com" 
      clienId="BrWjjdj20Qf1r4699RMiQ8DprI3UFk5n" 
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


reportWebVitals();
