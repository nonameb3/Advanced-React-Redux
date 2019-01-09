import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  // create fake div
  const div = document.createElement('div');
  ReactDOM.render(<App />,div);

  // logic
  expect(div.innerHTML).toContain('CommentBox');
  console.log(div.innerHTML);

  // clear JSDOM
  ReactDOM.unmountComponentAtNode(div);
});