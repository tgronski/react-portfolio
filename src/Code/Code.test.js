import React from 'react';
import ReactDOM from 'react-dom';
import Code from './Code';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Code />, section);
  ReactDOM.unmountComponentAtNode(section);
});
