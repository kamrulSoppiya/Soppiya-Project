/// <reference types="react" />
export type CardFooterProps = {
    children: React.ReactNode;
    justifyContent?: "start" | "center" | "end" | "between" | "around";
    border?: "top";
    padding?: "sm" | "md" | "lg";
    customPadding?: string;
    className?: string;
};
