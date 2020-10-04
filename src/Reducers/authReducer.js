import { LOGIN, AUTH_ERROR, LOGOUT } from "../Actions/types";

const INITIAL_STATE = {
  user: "",
  error: ""
}


export default (state=  INITIAL_STATE, action) => {
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        user: ""
      }
    default: 
      return state
  }
}