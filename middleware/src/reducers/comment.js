import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default (state=[], {type, payload}) => {
  switch(type){
    case SAVE_COMMENT:
      return [...state, payload];
    case FETCH_COMMENTS:
      const namelists = payload.data.map(comment=>comment.name);
      return [...state, ...namelists];
    default:
      return state;
  }
};