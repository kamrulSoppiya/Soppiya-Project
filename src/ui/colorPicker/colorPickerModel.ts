import { ChangeEvent, FocusEvent } from "react";
export type ErrorType = {
  status: boolean;
  message: string;
};

export type InputProps = {
  name?: string;
  label?: string;
  helpText?: string;
  value?: string;
  disabled?: boolean;
  error?: ErrorType;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
};
