import React from "react";
import { OptForm, Feature } from "../components";
import { JumbotronContainer } from "../containers/jumbotron";
import { FootContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/accordion";
import { HeaderContainer } from "../containers/header";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at any time.
          </Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FootContainer />
    </>
  );
};

export default Home;
