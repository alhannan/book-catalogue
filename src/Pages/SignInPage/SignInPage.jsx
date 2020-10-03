import React from "react";
import "./SignInPage.styles.scss";
import { RenderInput, SubmitButton, FbButton, GoogleButton } from "../../Components/Fields";

function SignInPage() {
  return (
    <div className="container">
      <div className="container__block">
        <h1>Sign In</h1>
        {/* <input type="text" /> */} 
        <RenderInput type="text" placeholder="Email" autoComplete="off"/>
        <RenderInput type="password" placeholder="Password" autoComplete="off"/>
        <br/>
        <SubmitButton value="Sign In" />
        <p>or</p>
        <FbButton value="Continue with Facebook"/>
        <GoogleButton value="Continue with Google"/>
      </div>
    </div>
  );
}

export default SignInPage;
