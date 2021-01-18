import * as React from "react";
import { Button, Grid } from "@material-ui/core";
import { CalculatorButtonProps } from "../../types";
import { style } from "./styles";

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  handleClick,
}) => {
  const classes = style();
  return (
    <Grid item xs={3}>
      <Button onClick={(e) => handleClick(label)} className={classes.button}>
        {label}
      </Button>
    </Grid>
  );
};
