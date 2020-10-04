import { firestore } from "../Firebase/index";
import { GET_BOOKS } from "./types";

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
