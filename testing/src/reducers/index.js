import { combineReducers } from 'redux';
import CommentReducer from 'reducers/comment';

export default combineReducers({
  comment : CommentReducer
});