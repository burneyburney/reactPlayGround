import React from 'react'; // React = variables, 'react' = what we are making it
import {render} from 'react-dom'; //take one method from react-dom
import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.querySelector('#main'));
