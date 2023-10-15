import { ChangeEvent } from "react";

export type RadioProps = {
  size?: "sm" | "md" | "lg";
  title?: string;
  subTitle?:string;
  labelId?:string;
  name?: string;
  checked?: boolean;
  value?:string;
  titleFontWeight?:"regular"|"medium" | "semiBold"
  disabled?:boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};