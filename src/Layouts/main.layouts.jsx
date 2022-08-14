import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./navigation.layouts";

const MainLayouts = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayouts;
