import * as React from "react";
import { ButtonRow } from "./ButtonRow";
import { ButtonContainerProps } from "../../types";

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  handleClick,
}) => {
  return (
    <>
      <ButtonRow characters={["C", "<-", "%", "/"]} handleClick={handleClick} />
      <ButtonRow characters={["7", "8", "9", "*"]} handleClick={handleClick} />
      <ButtonRow characters={["4", "5", "6", "-"]} handleClick={handleClick} />
      <ButtonRow characters={["1", "2", "3", "+"]} handleClick={handleClick} />
      <ButtonRow characters={["0", ".", "="]} handleClick={handleClick} />
    </>
  );
};
