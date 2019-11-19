import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Footer />, section);
  ReactDOM.unmountComponentAtNode(section);
});
