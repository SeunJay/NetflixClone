import React from "react";
import { Inner, Item, Container, Title, SubTitle } from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};


Jumbotron.Title = function JumbotronTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};


Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restprops }) {
  return <SubTitle {...restprops}>{children}</SubTitle>;
};
