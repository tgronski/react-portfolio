import React from 'react';
import ReactDOM from 'react-dom';
import Lead from './Lead';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Lead />, section);
  ReactDOM.unmountComponentAtNode(section);
});
