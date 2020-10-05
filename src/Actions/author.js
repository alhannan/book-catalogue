import { firestore } from "../Firebase/index";
import { GET_AUTHOR, ADD_AUTHOR } from "./types";

export const getAuthors = () => async (dispatch) => {
  try {
    
    const authorsArray = [];
    const authors = await firestore.collection("authors").get();

    authors.forEach((doc) => {
      authorsArray.push({ id: doc.id, ...doc.data() });
    });
    
    dispatch({
      type: GET_AUTHOR,
      payload: authorsArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addAuthor = () => async (dispatch, getState) => {
  const author = await getState().form.addBook.values.author;
  firestore.collection("authors").add({
    name: author,
    books: []
  })
  
  dispatch({
    type: ADD_AUTHOR,
  })
  
}