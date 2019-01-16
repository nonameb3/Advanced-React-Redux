import { SaveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', ()=>{
  it('has the correct type',()=>{
    const action = SaveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the corrent payload', ()=>{
    const action = SaveComment('comment');
    expect(action.payload).toEqual('comment');
  });
});