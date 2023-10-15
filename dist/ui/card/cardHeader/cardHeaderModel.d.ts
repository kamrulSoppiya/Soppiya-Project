/// <reference types="react" />
export type CardHeaderProps = {
    children: React.ReactNode;
    justifyContent?: "start" | "center" | "end" | "between" | "around";
    border?: "bottom";
    padding?: "sm" | "md" | "lg";
    customPadding?: string;
    className?: string;
};
