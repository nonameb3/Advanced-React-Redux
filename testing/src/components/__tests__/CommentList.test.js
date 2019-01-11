import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(()=>{
  const initalState = {
    comment : ['comment1','comment2']
  };

  wrapped = mount(
    <Root initalState={initalState}>
      <CommentList/>
    </Root>
  );
});

// clear
afterEach(()=>{
  wrapped.unmount();
});

it('one comment for it',()=>{
  console.log(wrapped.find('li').length);
});
