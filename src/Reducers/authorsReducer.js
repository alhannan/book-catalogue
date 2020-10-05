import { GET_AUTHOR } from "../Actions/types";

export default (state = {}, action) => {
  switch(action.type) {
    case GET_AUTHOR:
      return {
        ...state,
        ...action.payload
      }

    default: 
      return state
  }
}