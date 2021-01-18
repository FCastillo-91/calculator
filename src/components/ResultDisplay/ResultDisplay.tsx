import * as React from "react";
import { Container } from "@material-ui/core";
import { ResultDisplayProps } from "../../types";
import { style } from "./styles";

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ children }) => {
  const classes = style();
  return (
    <>
      <Container className={classes.resultDisplayContainer}>
        {children}
      </Container>
    </>
  );
};
