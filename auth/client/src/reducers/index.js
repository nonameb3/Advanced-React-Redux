import { combineReducers } from 'redux'
import { reducer as formRedux } from 'redux-form'
import auth from './auth'

export default combineReducers({
  auth,
  form: formRedux
})