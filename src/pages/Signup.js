import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FootContainer } from "../containers/footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";

const initialState = {
  firstName: "",
  email: "",
  password: "",
};

const Signup = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [errors, setErrors] = useState("");
  const [formValues, setFormValues] = useState(initialState);

  const { firstName, email, password } = formValues;

  const isInvalid = firstName === "" || email === "" || password === "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await response.user.updateProfile({
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1,
      });

      setFormValues(initialState);
      setErrors("");
      history.push(ROUTES.BROWSE);
    } catch (error) {
      setErrors(error.message);
    }

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((result) =>{
    //     console.log(result)
    //     result.user
    //       .updateProfile({
    //         displayName: firstName,
    //         photoURL: Math.floor(Math.random() * 5) + 1,
    //       })
    //       .then(() => {
    //         setFormValues(initialState);
    //         setErrors("");
    //         history.push(ROUTES.BROWSE);
    //       })}
    //   )
    //   .catch((error) => setErrors(error.message));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {errors && <Form.Error>{errors}</Form.Error>}

          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input
              onChange={handleChange}
              placeholder="First Name"
              value={firstName}
              name="firstName"
            />
            <Form.Input
              onChange={handleChange}
              placeholder="Email Address"
              value={email}
              name="email"
            />
            <Form.Input
              onChange={handleChange}
              placeholder="Password"
              type="password"
              value={password}
              name="password"
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FootContainer />
    </>
  );
};

export default Signup;
