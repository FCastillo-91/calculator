import * as React from "react";
import { CalculationDisplayProps } from "../../types";
import { Container } from "@material-ui/core";
import { style } from "./styles";

export const CalculationDisplay: React.FC<CalculationDisplayProps> = ({
  calculation = "",
}) => {
  const classes = style();

  return (
    <>
      <Container className={classes.container}>{calculation}</Container>
    </>
  );
};
