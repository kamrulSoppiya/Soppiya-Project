import { NotVerifiedIcon, VerifiedIcon } from "@/assets/icons";
import React from "react";
import { VerifiedProps } from "./VerifiedPropsTypes";
import style from "./verifiedBadge.module.scss";
const VerifiedBadge = ({ status }: VerifiedProps) => {
  return (
    <div className={style.verified_badge}>
      {status === true ? (
        <>
          <VerifiedIcon />
          <span className={style.verified_verified_text}>Verified</span>
        </>
      ) : (
        <>
          <NotVerifiedIcon />
          <span className={style.not_verified_text}>Not Verified</span>
        </>
      )}
    </div>
  );
};

export default VerifiedBadge;
