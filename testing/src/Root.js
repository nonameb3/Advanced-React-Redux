import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from 'reducers';
import reduxPromise from 'redux-promise';

function Root({children, initalState={}}){
  //const store = createStore(Reducers, initalState, applyMiddleware(reduxPromise));

  const store = createStore(Reducers, initalState, composeWithDevTools(
    applyMiddleware(reduxPromise)
  ));

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default Root;