import 'materialize-css/dist/css/materialize.css';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers,{},applyMiddleware(reduxThunk));
ReactDOM.render(
<Provider store = {store}><App/></Provider>,document.querySelector('#root'));

// console.log("React stripe key is:",process.env.REACT_APP_STRIPE_KEY);
// console.log("Our Enviorment is:",process.env.NODE_ENV);