import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(()=>{
  wrapped = mount(<CommentBox/>);
});

it('Has comment box and a button',()=>{
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});