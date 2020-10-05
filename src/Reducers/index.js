import { combineReducers } from "redux";
import authReducer from "./authReducer";
import booksReducer from "./booksReducer";
import authorsReducer from "./authorsReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  books: booksReducer,
  form: formReducer,
  authors: authorsReducer
})