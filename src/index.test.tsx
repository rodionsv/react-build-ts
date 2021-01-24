import React from 'react';

import ReactDOM from 'react-dom';

import { App } from './App';

import { renderApp } from './index';

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) document.body.removeChild(container);
  container = null;
});

jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

describe('index.js', () => {
  it('should call renderApp function which will call render of a whole app', () => {
    renderApp();
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
});
