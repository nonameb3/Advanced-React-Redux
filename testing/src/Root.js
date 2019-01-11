import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from 'reducers';

function Root(props){
  return (
    <Provider store={createStore(Reducers)}>
      {props.children}
    </Provider>
  );
}

export default Root;