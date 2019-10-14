import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

// import "./sign-in.styles.scss";
import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer
} from "./sign-in.styles";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredential;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);

    /* try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    } */
  };

  return (
    <SignInContainer>
      <TitleContainer>I already have an account.</TitleContainer>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
