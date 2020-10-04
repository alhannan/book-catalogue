import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SignInPage.styles.scss";
import {
  RenderInput,
  SubmitButton,
  FbButton,
  GoogleButton,
} from "../../Components/Fields";
import {SignIn, googleSignIn, facebookSignIn} from "../../Actions/auth.js"

function SignInPage () {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authError = useSelector(state => state.auth.error)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignIn(email, password))
    setEmail("");
    setPassword("");
  }

  const handleGoogleSubmit = (e) => {
    e.preventDefault();
    dispatch(googleSignIn());
  }

  const handleFacebookSubmit = (e) => {
    e.preventDefault();
    dispatch(facebookSignIn());
  }

  return (
    <div className="container">
      <form className="container__block" onSubmit={handleSubmit}>
        <h1>Book Catalogue</h1>
        <h3>Sign in</h3>
        <RenderInput
          name="email"
          type="text"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <RenderInput
          name="password"
          labelActive=""
          type="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{authError}</p>
        <SubmitButton value="Sign in" />
        <p>or</p>
        <FbButton value="Continue with Facebook" onClick={handleFacebookSubmit}/>
        <GoogleButton value="Continue with Google" onClick={handleGoogleSubmit}/>
      </form>
    </div>
  );
};

export default SignInPage;
