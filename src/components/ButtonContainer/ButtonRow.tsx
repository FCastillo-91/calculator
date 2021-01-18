import * as React from "react";
import { CalculatorButton } from "./CalculatorButton";
import { ButtonRowProps } from "../../types";
import { Grid } from "@material-ui/core";

export const ButtonRow: React.FC<ButtonRowProps> = ({
  characters,
  handleClick,
}) => {
  return (
    <Grid container>
      {characters.map((char) => {
        return (
          <CalculatorButton
            key={`${char}-button`}
            handleClick={handleClick}
            label={char}
          />
        );
      })}
    </Grid>
  );
};
