import AVATAR_IMG from "@/assets/images/avatar.png";
import { classNames } from "@/utils";
import React from "react";
import style from "./userAvatar.module.scss";
import { UserAvatarProps } from "./userAvatarModel";

const UserAvatar = ({ name, size, url }: UserAvatarProps) => {
  let avatarElement: React.ReactNode;
  const colorSet: Record<string, string> = {
    set1: "#5F27CD",
    set2: "#008060",
    set3: "#E66767",
    set4: "#B98900",
  };
  const alphabetSet: Record<string, string> = {
    set1: "AEIMQUY",
    set2: "BFSNRVZ",
    set3: "CGKOSW",
    set4: "DHLPTX",
  };

  const interpretCharacterColor = (char: string) => {
    let color = "";
    Object.keys(alphabetSet).forEach((set) => {
      if (alphabetSet[set].includes(char)) {
        color = colorSet[set];
        return;
      }
    });
    return color;
  };

  let avatarColor = "";

  function handleAvatarName(name: string) {
    const splitName = name.split(" ");
    let returnValue = "";
    if (splitName.length > 1) {
      returnValue =
        splitName[0].charAt(0).toLocaleUpperCase() + splitName[1].charAt(0).toLocaleUpperCase();
    } else {
      if (name.length >= 2) {
        returnValue = name.slice(0, 2).toLocaleUpperCase();
      } else {
        returnValue = name.charAt(0) + name.charAt(0);
      }
    }
    avatarColor = interpretCharacterColor(returnValue[0]);
    return returnValue;
  }

  if (url) {
    avatarElement = <img src={url} alt="" />;
  } else if (name && name.trim()) {
    avatarElement = <span className={style.name}>{handleAvatarName(name)}</span>;
  } else {
    avatarElement = <img src={AVATAR_IMG} alt="" />;
  }

  return (
    <div
      className={classNames(style.avatar, style["avatar_" + size])}
      style={{
        background: url ? "transparent" : avatarColor,
        border: url ? "1px solid #B9B3AE" : "none",
      }}
    >
      {avatarElement}
    </div>
  );
};

export default UserAvatar;
