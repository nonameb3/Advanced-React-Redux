import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from 'reducers';
import async from 'middleware/async';
import stateValidater from 'middleware/stateValidator';

function Root({children, initalState={}}){

  const store = createStore(Reducers, initalState, composeWithDevTools(
    applyMiddleware(async, stateValidater)
  ));

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default Root;