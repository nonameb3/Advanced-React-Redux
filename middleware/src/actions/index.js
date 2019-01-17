import { SAVE_COMMENT, FETCH_COMMENTS, AUTH_LOGIN } from 'actions/types';
import axios from 'axios';

export const SaveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const FetchComments = () => {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return{
    type: FETCH_COMMENTS,
    payload: response
  };
};

export const AuthLogin = IsLogin => {
  return {
    type: AUTH_LOGIN,
    payload: IsLogin
  };
};