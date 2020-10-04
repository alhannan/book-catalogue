import { auth, firebase } from "../Firebase/index";
import { LOGIN, AUTH_ERROR, LOGOUT } from "./types";

export const SignIn = (email, pass) => async (dispatch) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, pass);
    dispatch({
      type: LOGIN,
      payload: { uid: user?.uid, email: user?.email },
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.message,
    });
  }
};

export const userDetail = (user) => async (dispatch) => {
  const { uid, email } = user;

  dispatch({
    type: LOGIN,
    payload: { uid, email },
  });
};

export const googleSignIn = () => async (dispatch) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  const { user } = await auth.signInWithPopup(provider);

  dispatch({
    type: LOGIN, 
    payload: { uid: user?.uid, email: user?.email }
  })
}

export const facebookSignIn = () => async (dispatch) => {
  var provider = new firebase.auth.FacebookAuthProvider();
  const { user } = await auth.signInWithPopup(provider);

  dispatch({
    type: LOGIN, 
    payload: { uid: user?.uid, email: user?.email }
  })
}

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({ type: LOGOUT });
};