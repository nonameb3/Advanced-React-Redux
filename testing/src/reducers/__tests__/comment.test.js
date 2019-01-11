import commentReducer from 'reducers/comment';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT',()=>{
  const action ={
    type : SAVE_COMMENT,
    payload : 'new comment'
  };

  const reducer = commentReducer([],action);
  expect(reducer).toEqual(['new comment']);
});

it('handles actions of unknown type',()=>{
  const reducer = commentReducer([],{type:'unknown'});
  expect(reducer).toEqual([]);
});