import { SAVE_COMMENT } from 'actions/types';

export const SaveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};