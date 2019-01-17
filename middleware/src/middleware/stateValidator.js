import tv4 from 'tv4';
import stateSchema from 'middleware/stateSchema';

const stateValidator = ({getState}) => next => action => {
  next(action);

  if(!tv4.validate(getState(), stateSchema )){
    console.warn('Invalid state schema detected');
  }

};

export default stateValidator;