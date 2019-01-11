import { SAVE_COMMENT } from 'actions/types';

export default (state=[], {type, payload}) => {
  switch(type){
    case SAVE_COMMENT:
      return [...state, payload];
    default:
      return state;
  }
};