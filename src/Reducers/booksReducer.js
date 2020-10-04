import { GET_BOOKS, GET_BOOK_DETAILS, REMOVE_BOOK_DETAILS } from "../Actions/types";

const INITIAL_STATE = {
  allBooks: "",
  selectedBook: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        allBooks: action.payload,
      };
    case GET_BOOK_DETAILS:
      return {
        ...state,
        selectedBook: action.payload,
      };
    case REMOVE_BOOK_DETAILS:
      return {
        ...state,
        selectedBook: ""
      }
    default:
      return state;
  }
};
