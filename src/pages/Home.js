import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FootContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/accordion";

const Home = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FootContainer />
    </>
  );
};

export default Home;
