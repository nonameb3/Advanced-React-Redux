import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import App from 'components/App';
import Root from 'Root';

beforeEach(()=>{
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
    status:200,
    response:[{name:'comment1'},{name:'comment2'}]
  });
});

afterEach(()=>{
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  // attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App/>
    </Root>
  );
  //find the 'fetchComment' buttton and click !!
  wrapped.find('.fectComment').simulate('click');
  // delay and Expect to find an list of comments!
  // delay 100 ms
  // setTimeout(()=>{ },100);

  // use moxios wait
  moxios.wait(()=>{
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });

});