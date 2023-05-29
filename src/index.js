import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { IntlProvider } from 'react-intl';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import messages_en from "./locales/en.json";
import messages_es from "./locales/es.json";
import { BrowserRouter } from 'react-router-dom';
import CreateRoutes from './routes/routes';

const messages = {
  'en': messages_en,
  'es': messages_es
};

const userLanguage = navigator.language || navigator.userLanguage;
const defaultLocale = userLanguage.startsWith('es') ? 'es' : 'en';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={defaultLocale} messages={messages[defaultLocale]}>
    <React.StrictMode>
      <BrowserRouter>
        <CreateRoutes />
      </BrowserRouter>
    </React.StrictMode>
  </IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
