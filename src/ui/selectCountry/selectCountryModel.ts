import { FocusEvent } from "react";
export type ErrorType = {
  status: boolean;
  message: string;
};

export type CountryType = {
  name: string;
  value: string;
};

export type SelectCountryProps = {
  countries: Array<CountryType>;
  size?: "sm" | "md" | "lg";
  name?: string;
  label?: string;
  helpText?: string;
  maxLength?: number;
  disabled?: boolean;
  labelHidden?: boolean;
  allowClear?: boolean;
  readOnly?: boolean;
  error?: ErrorType;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void;
  onFocus?: (event: FocusEvent<HTMLSelectElement, Element>) => void;
};
