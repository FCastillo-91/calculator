import * as React from "react";
import { Container } from "@material-ui/core";
import { CalculatorContainerProps } from "../../types";

export const CalculatorContainer: React.FC<CalculatorContainerProps> = ({
  children,
}) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};
