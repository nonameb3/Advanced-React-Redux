import { AUTH_LOGIN } from 'actions/types';

export default (state = false, {type, payload}) => {
  switch(type){
    case AUTH_LOGIN:
      return payload;
    default :
      return state;
  }
};