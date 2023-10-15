import React from 'react'
import style from "./previewSlide.module.scss"
import { Text } from '@/ui/text';
import { Button } from '@/ui/button';
import { CrossLineIcon, RightArrowIcon } from '@/assets/icons';
import LeftArrowIcon from '@/assets/icons/leftArrowIcon/LeftArrowIcon';
import { PreviewSlideProps } from './previewSlideModel';
import {imageManagerModel} from './previewSlideModel';


const PreviewSlide = ({ imgSource, handlePrevClick, handleNextClick, currentIndex, imgName, onClose }: PreviewSlideProps) => {
  return (
    <div className={style.preview_slide}>
      <div className={style.preview_slide_header}>
        <Text size='md' fontWeight='semiBold'> Preview</Text>
        <Button type='text' onClick={onClose}> <CrossLineIcon /> </Button>
      </div>
      
      <div className={style.slide_area}>
        <div className={style.prev} onClick={handlePrevClick}>
          <Button type='text'>
            <LeftArrowIcon />
          </Button>
        </div>
        
        <div className={style.preview_image}>
            <img src={imgSource[currentIndex]!.url} alt={imgName} />
        </div>

        <div className={style.next}>
          <Button type='text' onClick={handleNextClick}>
            <RightArrowIcon/>
          </Button>
        </div>
      </div>
    
      <div className={style.image_info}>
        <Text size='sm' fontWeight='regular'>{imgSource[currentIndex].fileName}</Text>
        <Text size='sm' fontWeight='regular'>{imgSource[currentIndex].imageSetDate} .{imgSource[currentIndex].fileExtentsion} .{imgSource[currentIndex].fileSize}</Text>
      </div>
    </div> 
  )
}

export default PreviewSlide;
