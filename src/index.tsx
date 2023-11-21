import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/globalVariables.css';
import { ProvideError } from './hooks/useError';
import { ProvideLoadingBar } from './hooks/useLoadingBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ProvideError>
        <ProvideLoadingBar>
          <App/>
        </ProvideLoadingBar>
      </ProvideError>
  </React.StrictMode>
);

