import { combineReducers } from 'redux';
import CommentReducer from 'reducers/comment';
import AuthReducer from 'reducers/auth';

export default combineReducers({
  comment : CommentReducer,
  auth : AuthReducer
});