import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux';
import reducer from './store/reducers/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

const app = (
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more card service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//https://www.epicurious.com/
//paralax
//https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
//https://css-tricks.com/recreating-netlifys-neat-o-sliding-button-effect/
//https://www.npmjs.com/package/react-dropdown-select
//https://react-hook-form.com/
//https://www.codingame.com/playgrounds/9396/redux-form-validation-tutorial