export interface CalculatorContainerProps {
  children: any;
}

export interface ResultDisplayProps {
  children: any;
}

export interface CalculationDisplayProps {
  calculation?: string;
}

export interface CalculatorButtonProps {
  label: string;
  handleClick: any;
}

export interface ButtonRowProps {
  characters: string[];
  handleClick: any;
}

export interface ButtonContainerProps {
  handleClick: any;
}
