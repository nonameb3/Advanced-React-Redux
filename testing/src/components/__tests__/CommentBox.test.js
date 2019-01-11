import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(()=>{
  wrapped = mount(
  <Root>
    <CommentBox/>
  </Root>
  );
});

// clear fake js div
afterEach(()=>{
  wrapped.unmount();
});

// check component has textarea and button
it('Has comment box and a button',()=>{
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text aera',()=>{
  beforeEach(()=>{
    // type 'new comment' to text aera
    wrapped.find('textarea').simulate('change',{
      target:{ value:'new comment'}
    });
    // force update component
    wrapped.update();
  });

  // simulate user can type on text box
  it('has a text aera that user can type in',()=>{
    // check new value
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  // simulate submit form, textarea is empty
  it('has user can submit form',()=>{
    // foce click submit
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

});