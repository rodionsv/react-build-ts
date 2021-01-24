import React from 'react';

import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { BuildTitle } from './BuildTitle';

let container: Element | DocumentFragment | null = null;
beforeEach(() => {
  container = document.createElement('div');
  container.id = 'root';
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    if ('remove' in container) container.remove();
  }
  container = null;
});

it('render build title', () => {
  act(() => {
    ReactDOM.render(<BuildTitle />, container);
  });
  if (container) expect(container.textContent).toBe('React webpack 5 build');
});
