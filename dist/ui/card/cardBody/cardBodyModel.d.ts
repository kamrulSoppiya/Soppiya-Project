/// <reference types="react" />
export type CardBodyProps = {
    children: React.ReactNode;
    border?: "bottom";
    padding?: "sm" | "md" | "lg" | "none";
    customPadding?: string;
    className?: string;
    onClick?: () => void;
};
