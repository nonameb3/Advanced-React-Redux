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
  expect(wrapped.find('li').length).toEqual(2);
});

it('show text for each comment', ()=>{
  expect(wrapped.render().text()).toContain('comment1');
  expect(wrapped.render().text()).toContain('comment2');
});