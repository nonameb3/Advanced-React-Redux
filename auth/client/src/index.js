import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'

import reducers from './reducers';
import Welcome from './components/Welcome'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import SignOut from './components/auth/SignOut'
import Feature from './components/Feature'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,{
  auth:{authentication:localStorage.getItem('token')}
}, composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome}/>
        <Route path="/signup" exact render={()=><SignUp/>}/>
        <Route path="/feature" exact component={Feature}/>
        <Route path="/signout" exact component={SignOut}/>
        <Route path="/signin" exact component={SignIn}/>
      </App>
    </BrowserRouter>
  </Provider>, 
  document.querySelector('#root')
)