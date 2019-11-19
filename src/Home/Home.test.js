import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Home />, section);
  ReactDOM.unmountComponentAtNode(section);
});
