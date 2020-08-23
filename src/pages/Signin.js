import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FootContainer } from "../containers/footer";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

const initialState = {
  email: "",
  password: "",
};

const Signin = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [errors, setErrors] = useState("");
  const [formValues, setFormValues] = useState(initialState);

  const isInvalid = formValues.email === "" || formValues.password === "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

      setFormValues(initialState);
      setErrors("");
      history.push(ROUTES.BROWSE);
    } catch (error) {
      setErrors(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const { email, password } = formValues;

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {errors && <Form.Error>{errors}</Form.Error>}

          <Form.Base onSubmit={handleSubmit} method="POST">
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
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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

export default Signin;
