import React from 'react';

import ReactDOM from 'react-dom';

import '@styles/main';
import { App } from './App';

export const renderApp = (): void => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp();
