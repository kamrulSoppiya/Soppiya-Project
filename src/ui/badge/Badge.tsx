import { classNames } from "@/utils";
import React from "react";
import style from "./badge.module.scss";
import { BadgeProps } from "./badgeModel";

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children = "Neutral", variation = "neutral" }, ref) => {
    const badgeClasses = classNames(style.badge, style["badge_" + variation]);
    return (
      <span ref={ref} className={badgeClasses}>
        {children}
      </span>
    );
  }
);
export default Badge;
