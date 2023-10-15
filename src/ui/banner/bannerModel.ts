import { MouseEvent } from "react";
export type BannerProps = {
  children?:React.ReactNode;
  status?: "default" | "info" | "success" | "warning" | "danger";
  isCross?: boolean;
  onClose?: (event?: MouseEvent) => void;
};
