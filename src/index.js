import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// redux plus logger
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// list of reducers

/* object template for pizzaReducer:
  { 
    id: ,
    name: ,
    price: ,
  }
*/

const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PIZZA':
      return [...state, action.payload];
    case 'REMOVE_PIZZA':
      let id = action.payload.id;
      return state.filter((entry) => entry.id !== id);
    default:
      return state;
  }
};


/* object template for infoReducer: 
  { 
    customer_name: , 
    street_address: ,
    city: ,
    zip: ,
    type:
  }
*/

const infoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_NEW_INFO':
      return action.type.payload;
    default:
      return state;
  }
};

// store
const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    infoReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
