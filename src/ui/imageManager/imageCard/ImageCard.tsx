import React, { useState } from 'react';
import style from './imageCard.module.scss';
import { classNames } from '@/utils';
import { DotsIcon } from '@/assets/icons';
import { Text } from '@/ui/text';
import { PreviewListProps } from './imageModel';

const ImageCard = ({
  selected,
  handleSelectedItem,
  imgSource,
  imgName,
  imagesView,
  handleImagePreview,
}: PreviewListProps) => {
  const [dotMenu, setDotMenu] = useState(false);
  console.log(selected);
  return (
  <div className={classNames(style.image_card, `${selected ? style.selected_image : ''}`, imagesView && style[imagesView+"_view"])}>
      <div className={style.card_top}>
        <div className={style.image_wrapper} onClick={handleSelectedItem}>
          <img src={imgSource} alt={imgName} />
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
              <div className={style.menu_text} onClick={handleImagePreview}>
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
            {imgName}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

