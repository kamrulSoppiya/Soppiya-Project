/// <reference types="react" />
export type TextProps = {
    type?: "paragraph" | "span" | "link" | "heading";
    size?: "sm" | "md" | "lg";
    headingAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    color?: "default" | "primary" | "secondary" | "tertiary" | "subdued" | "linkColor";
    textDecoration?: "default" | "line_through" | "underline" | "overline" | "superline";
    textAlign?: "start" | "center" | "end" | "justify";
    fontWeight?: "default" | "regular" | "medium" | "semiBold" | "bold";
    target?: "_blank" | "_self" | "_parent" | "_top";
    url?: string;
    hover?: boolean;
    truncate?: boolean;
    children?: React.ReactNode;
};
