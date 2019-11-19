import React from 'react';
import ReactDOM from 'react-dom';
import Articles from './Lead';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Articles />, section);
  ReactDOM.unmountComponentAtNode(section);
});
