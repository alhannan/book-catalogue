import { firestore, firebase } from "../Firebase/index";
import {
  GET_BOOKS,
  GET_BOOK_DETAILS,
  REMOVE_BOOK_DETAILS,
  ADD_BOOK,
} from "./types";

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
    const book = await (
      await firestore.collection("books").doc(id).get()
    ).data();

    const { books } = await (await firestore.collection("authors").doc(book.author.id).get()).data();


    dispatch({
      type: GET_BOOK_DETAILS,
      payload: {...book, authorBooks: books },
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeBookDetails = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_BOOK_DETAILS,
    payload: id,
  });
};

export const addBook = () => async (dispatch, getState) => {
  try {
    const { book, genre, author } = await getState().form.addBook.values;

    const authorRef = await firestore.collection("authors").doc(author);

    const { name } = await (await authorRef.get()).data();

    const { id }= await firestore.collection("books").add({
      name: book,
      genre: genre,
      author: {
        id: author,
        name: name,
      },
    })
    
    authorRef.update({
      books: firebase.firestore.FieldValue.arrayUnion({
        id: id,
        name: book
      })
    })

    dispatch({
      type: ADD_BOOK,
    });
  } catch (err) {
    console.log(err);
  }
};
