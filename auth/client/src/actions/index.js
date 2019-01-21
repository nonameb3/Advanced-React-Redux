import axios from 'axios'
import { AUTH_TYPE, AUTH_ERROR } from './type'

export const SignUp = ({ email, password }, callback) => async dispatch => {
  try{
    const response = await axios.post('http://localhost:8080/signup',{
      email,
      password
    })
    dispatch({
      type: AUTH_TYPE,
      payload: response.data.token
    })
    callback()
  }catch{
    dispatch({
      type: AUTH_ERROR,
      payload: 'email in use'
    })
  }
}