import React from 'react';

import { create, act, ReactTestRenderer } from 'react-test-renderer';

import { App } from './App';

describe('App.jsx', () => {
  it('renders with classes', () => {
    let appComponent: ReactTestRenderer | undefined;
    void act(() => {
      appComponent = create(<App />);
    });
    const title = appComponent?.root.findByType('h1');
    expect(appComponent?.toJSON()).toMatchSnapshot();
    expect(title?.props.children).toBe('React webpack 5 build');
  });
});
