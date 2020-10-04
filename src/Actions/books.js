import { firestore } from "../Firebase/index";
import { GET_BOOKS, GET_BOOK_DETAILS, REMOVE_BOOK_DETAILS } from "./types";

export const getBooks = () => async (dispatch) => {
  try {
    const booksArray = [];
    const books = await firestore.collection("books").get();

    books.forEach((doc) => {
      booksArray.push({ id: doc.id, ...doc.data() });
    });
    
    dispatch({
      type: GET_BOOKS,
      payload: booksArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBookDetails = (id) => async (dispatch) => {
  try {

    const book = await (await firestore.collection("books").doc(id).get()).data();
    dispatch({
      type: GET_BOOK_DETAILS,
      payload: book,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeBookDetails = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_BOOK_DETAILS,
    payload: id
  })
}
