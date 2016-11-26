import React from 'react'; // React = variables, 'react' = what we are making it
import {render} from 'react-dom'; //take one method from react-dom
import './css/style.css';
import App from './components/App';

import StorePicker from './components/StorePicker';

render(<App />, document.querySelector('#main'));
