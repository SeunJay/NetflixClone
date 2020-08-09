import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FootContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/accordion";
import { HeaderContainer } from "../containers/header";

const Home = () => {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FaqsContainer />
      <FootContainer />
    </>
  );
};

export default Home;
