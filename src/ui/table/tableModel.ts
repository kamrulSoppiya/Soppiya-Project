import React from "react";

export type RadioProps = {
    children?:React.ReactNode;
    scroll?:"scroll";
    border?:"bordered" | "headerBottom" | "borderLess";
    borderColor?:"info" | "success" | "danger" | "warning"| "dark";
    bgColor?:"info" | "success" | "warning" | "danger" | "dark" | "transparent" | "secondary"
    headerBgColor?:"info" | "success" | "warning" | "danger" | "dark" | "transparent" | "secondary"
    hover?:"hover";
    striped?:"striped";
    size?:"sm" | "md" | "lg" | "xlg";
};