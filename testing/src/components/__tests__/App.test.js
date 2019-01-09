import React from 'react';
import enzyme from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box', () => {
  const wrapped = enzyme.shallow(<App/>);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list',() => {
  const wrapped = enzyme.shallow(<App/>);
  expect(wrapped.find(CommentList).length).toEqual(1);
});