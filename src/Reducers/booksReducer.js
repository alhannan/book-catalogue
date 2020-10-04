import { GET_BOOKS} from "../Actions/types";

export default (state = "", action) => {
  switch(action.type){
    case GET_BOOKS:
      return {
        ...state, 
        ...action.payload
      }
      default:
        return state
  }
}