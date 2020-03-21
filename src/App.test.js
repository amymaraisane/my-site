import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
//note- default export name can be anything when you import it
//thats not true for components
//if is not exported as the default, use curly braces to enclose

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
