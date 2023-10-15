import { classNames } from "@/utils";
import React from "react";
import style from "./text.module.scss";
import { TextProps } from "./textModel";

const Text = ({
  type = "paragraph",
  size = "md",
  url = "",
  target = "_blank",
  hover = true,
  headingAs = "h1",
  color = "default",
  truncate = false,
  textDecoration = "default",
  children,
  textAlign = "start",
  fontWeight = "default",
}: TextProps) => {
  const commonClasses = classNames(
    style[color],
    style[textAlign],
    style[textDecoration],
    style[fontWeight],
    style[type + "_" + size],
    { [style["truncate"]]: truncate }
  );
  const headingClasses = classNames(style[headingAs]);

  if (type === "paragraph")
    return <p className={classNames(style.paragraph, commonClasses)}>{children}</p>;

  if (type === "span")
    return <span className={classNames(style.span, commonClasses)}>{children}</span>;
  if (type === "link")
    return (
      <a
        href={url}
        target={target}
        className={classNames(style.link, commonClasses, { [style["hover"]]: hover })}
      >
        {children}
      </a>
    );

  if (type === "heading") {
    if (headingAs === "h1")
      return <h1 className={classNames(headingClasses, commonClasses)}>{children}</h1>;
    if (headingAs === "h2")
      return <h2 className={classNames(headingClasses, commonClasses)}>{children}</h2>;
    if (headingAs === "h3")
      return <h3 className={classNames(headingClasses, commonClasses)}>{children}</h3>;
    if (headingAs === "h4")
      return <h4 className={classNames(headingClasses, commonClasses)}>{children}</h4>;
    if (headingAs === "h5")
      return <h5 className={classNames(headingClasses, commonClasses)}>{children}</h5>;
    if (headingAs === "h6")
      return <h6 className={classNames(headingClasses, commonClasses)}>{children}</h6>;
  }
  return null;
};

export default Text;
