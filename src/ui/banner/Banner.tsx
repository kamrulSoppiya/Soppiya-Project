import { CheckCircle, CrossLineIcon, ErrorIcon, InfoIcon, WarningIcon } from "@/assets/icons";
import { Button } from "@/ui/button";
import { classNames } from "@/utils";
import React from "react";
import style from "./banner.module.scss";
import { BannerProps } from "./bannerModel";

const Banner = ({ children, status = "default", onClose, isCross }: BannerProps) => {
  const iconList = {
    default: <CheckCircle />,
    info: <InfoIcon />,
    success: <CheckCircle />,
    warning: <WarningIcon />,
    danger: <ErrorIcon />,
  };

  return (
    <div className={classNames(style.banner, style[status])}>
      <div className={style.banner_inner}>
        <div className={style.banner_left_col}>
          <span className={style.banner_status_icon}>{iconList[status]}</span>
        </div>
        <div className={style.banner_right_col}>{children}</div>
        {isCross && (
          <div className={style.banner_cross_icon}>
            <Button type="text" onClick={onClose}>
              <CrossLineIcon />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Banner;
