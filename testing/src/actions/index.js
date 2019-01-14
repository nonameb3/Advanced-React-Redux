import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

export const SaveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const FetchComments = async () => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
  console.log(response);
  return{
    type: FETCH_COMMENTS,
    payload: response.data
  };
};