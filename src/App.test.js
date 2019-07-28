import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//note- default export name can be anything when you import it
//thats not true for components
//if is not exported as the default, use curly braces to enclose

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
