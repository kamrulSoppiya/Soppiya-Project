import { CrossLineIcon } from "@/assets/icons";
import { Button } from "@/ui/button";
import { Card } from "@/ui/card";
import { Text } from "@/ui/text";
import { classNames } from "@/utils";
import React from "react";
import style from "./modal.module.scss";
import { ModalPropsTypes } from "./modalModel";

const Modal = ({
  title,
  children,
  buttonText,
  closeButtonText,
  buttonVariant,
  size = "md",
  loading=false,
  cardBodyPadding="lg",
  scrollOff,
  onClose,
  onClickFunc,
}: ModalPropsTypes) => {
  return (
    <div className={style.modal}>
      <div className={classNames(style.modal_dialog, style["modal_" + size])}>
        <div className={style.modal_content}>
          <Card>
            <Card.Header justifyContent="between" border="bottom">
              <Text type="heading" headingAs="h3" fontWeight="medium">
                {title}
              </Text>
              <Button type="text" onClick={onClose} >
                {" "} 
                <CrossLineIcon />{" "}
              </Button>
            </Card.Header>
            <Card.Body padding={cardBodyPadding}> <div className={classNames(scrollOff ? "scroll_off":style.wrapper)}>{children}</div> </Card.Body>
            {(buttonText || closeButtonText) && (
              <Card.Footer justifyContent="end" border="top">
                {closeButtonText && (
                  <Button type="outline" onClick={onClose} loading={loading}>
                    {closeButtonText}
                  </Button>
                )}
                {buttonText && (
                  <Button variant={buttonVariant} type="normal" onClick={onClickFunc} loading={loading}>
                    {buttonText}
                  </Button>
                )}
              </Card.Footer>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Modal;
