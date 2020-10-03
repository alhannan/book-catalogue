import React from "react";
import "./SignInPage.styles.scss";
import { RenderInput, SubmitButton, FbButton, GoogleButton } from "../../Components/Fields";

function SignInPage() {
  return (
    <div className="container">
      <div className="container__block">
        <h1>Book Catalogue</h1>
        <h3>Sign in</h3>
        <RenderInput type="text" placeholder="Email" autoComplete="off"/>
        <RenderInput type="password" placeholder="Password" autoComplete="off"/>
        <br/>
        <SubmitButton value="Sign in" />
        <p>or</p>
        <FbButton value="Continue with Facebook"/>
        <GoogleButton value="Continue with Google"/>
      </div>
    </div>
  );
}

export default SignInPage;
