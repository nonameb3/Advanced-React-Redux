const Middleware = ({dispatch}) => next => action =>{
  // check action is promise?
  if(!action.payload || !action.payload.then){
    return next(action);
  }

  // is promise
  action.payload.then(response => {
    const newAction = {...action, payload:response};
    dispatch(newAction);
  });
};

export default Middleware;