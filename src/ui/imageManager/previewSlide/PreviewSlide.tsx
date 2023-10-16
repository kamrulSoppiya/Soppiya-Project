import React, { useEffect, useState } from 'react'
import style from "./previewSlide.module.scss"
import { Text } from '@/ui/text';
import { Button } from '@/ui/button';
import { CrossLineIcon, RightArrowIcon } from '@/assets/icons';
import LeftArrowIcon from '@/assets/icons/leftArrowIcon/LeftArrowIcon';
import { PreviewSlideProps } from './previewSlideModel';

// export type PreviewSlideProps ={
//   currentId?:number;
//   onShow:(param: boolean)=>void;
//   onClose?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// }
const PreviewSlide = ({ images, currentId, onShow }: PreviewSlideProps) => {

  const [currentIndex, setCurrentIndex] = useState<number>(images.findIndex(image => image._id === currentId));

  useEffect(() => {
    const selectedImageIndex = images.findIndex(image => image._id === currentId);
    setCurrentIndex(selectedImageIndex);
  }, [currentId, images]);

    // close Image Preview
    const closeImagePreview = (): void => {
      setCurrentIndex(0);
      onShow(false);
    };
  
    const handlePrevClick =()=> {
      const selectedImageIndex = images.findIndex(image => image._id === currentId);
      setCurrentIndex(selectedImageIndex);

      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }else{
        setCurrentIndex(0);
      }
    };
  
    const handleNextClick = (): void => {
      const selectedImageIndex = images.findIndex(image => image._id === currentId);
      setCurrentIndex(selectedImageIndex);

      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }else{
        setCurrentIndex(images.length-1);
      }
    };
  return (
    <div className={style.preview_slide}>
      <div className={style.preview_slide_header}>
        <Text size='md' fontWeight='semiBold'> Preview</Text>
        <Button type='text' onClick={closeImagePreview}> <CrossLineIcon /> </Button>
      </div>
      
      <div className={style.slide_area}>
        <div className={style.prev} onClick={handlePrevClick}>
          <Button type='text'>
            <LeftArrowIcon />
          </Button>
        </div>
        
        <div className={style.preview_image}>
            <img src={images[currentIndex]!.url} alt={images[currentIndex].file_name} />
        </div>

        <div className={style.next}>
          <Button type='text' onClick={handleNextClick}>
            <RightArrowIcon/>
          </Button>
        </div>
      </div>
    
      <div className={style.image_info}>
        <Text size='sm' fontWeight='regular'>{images[currentIndex].file_name}</Text>
        <Text size='sm' fontWeight='regular'>12 March 2023 .png .500*500</Text>
      </div>
    </div> 
  )
}

export default PreviewSlide;
