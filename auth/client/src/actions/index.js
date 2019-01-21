import axios from 'axios'
import { AUTH_TYPE } from './type'

export const SignUp = ({ email, password }) => dispatch => {
  axios.post('http://localhost:8080/signup',{
    email,
    password
  })
}