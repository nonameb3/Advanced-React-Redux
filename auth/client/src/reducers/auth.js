import { AUTH_TYPE, AUTH_ERROR } from '../actions/type'  

const init_state = {
  authentication:'',
  error:''
}

export default function(state=init_state, { type, payload }){
  switch(type){
    case AUTH_TYPE:
      return {...state, authentication:payload}
    case AUTH_ERROR:
      return {...state, error:payload}
    default:
      return state
  }
}