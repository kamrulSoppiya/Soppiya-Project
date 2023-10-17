import React, { useState } from 'react';
import style from './imageCard.module.scss';
import { classNames } from '@/utils';
import { DotsIcon } from '@/assets/icons';
import { Text } from '@/ui/text';
import { PreviewListProps } from './imageModel';

const ImageCard = ({
  selected,
  image,
  className,
  onSelect,
  onCurrentPreview,
}: PreviewListProps) => {
  const [dotMenu, setDotMenu] = useState(false);

  return (
    <div className={classNames(style.image_card, selected ? style.selected_image : '', className && style[className + "_view"])}>
      <div className={style.card_top}>
        <div className={style.image_wrapper} onClick={() => typeof onSelect === "function" && onSelect(image._id)}>
          <img src={image.url} alt={image.file_name} draggable = "false"/>
        </div>
        <div className={style.hover}>
          <div className={style.dot_button} onClick={() => setDotMenu((prev) => !prev)}>
            <DotsIcon />
          </div>
          <div className={classNames(style.menus, dotMenu && style.active)}>
            <div className={style.menu_item}>
              <div className={style.menu_text}>
                <Text size="md" fontWeight="regular">
                  Edit
                </Text>
              </div>
            </div>
            <div className={style.menu_item}>
              <div className={style.menu_text} onClick={() => typeof onCurrentPreview === "function" && onCurrentPreview(image._id)}>
                <Text size="md" fontWeight="regular">
                  Preview
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.card_bottom}>
        <div className={style.name}>
          <Text size="sm" fontWeight="regular" truncate>
            {image.file_name}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

