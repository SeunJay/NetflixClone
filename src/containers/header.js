import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../images/misc/logo.svg";

export const HeaderContainer = ({ children, ...restProps }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix-Logo" />
        <Header.ButtonLink to={ROUTES.SIGN_IN} >SIGN IN</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};
