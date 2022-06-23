import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/styles.css"
import App from './components/App';
import {
  BrowserRouter,
} from "react-router-dom";

import { UserProvider } from './context/useUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider test="test">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

