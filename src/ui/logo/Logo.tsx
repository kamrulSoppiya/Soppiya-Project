import { classNames } from "@/utils";
import React from "react";
import style from "./logo.module.scss";
import { LogoProps } from "./logoModel";

const Logo = ({ variant = "color_black", size = "md" }: LogoProps) => {
  const logoVariants = {
    solid_black: "https://cdn.soppiya.biz/system/images/brand/logo_solid_black_155x48.svg",
    solid_white: "https://cdn.soppiya.biz/system/images/brand/logo_solid_white_155x48.svg",
    color_black: "https://cdn.soppiya.biz/system/images/brand/logo_color_black_155x48.svg",
    color_white: "https://cdn.soppiya.biz/system/images/brand/logo_color_white_155x48.svg",
  };
  return (
    <div className={style.logo__wrapper}>
      <img
        src={logoVariants[variant]}
        alt="Soppiya"
        className={classNames(style.logo, style["logo__" + size])}
      />
    </div>
  );
};
export default Logo;
