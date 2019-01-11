import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from 'reducers';

function Root({children, initalState={}}){
  return (
    <Provider store={createStore(Reducers, initalState)}>
      {children}
    </Provider>
  );
}

export default Root;