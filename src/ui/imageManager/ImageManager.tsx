import React, { useState, ChangeEvent } from 'react';
import style from './imageManager.module.scss';
import { Modal } from '../modal';
import { ImageMangerProps } from './imageManagerModel';
import { ImageObject } from './imageManagerModel';
import { ImageManagerHeader } from './imageManagerHeader';
import { classNames } from '@/utils';
import { ImageCard } from './imageCard';
import { PreviewSlide } from './previewSlide';
import { DropZone } from '../dropzone';


const ImageManager = ({
  title = "Select image",
  buttonText = "Done",
  buttonLoader,
  buttonVariant = "disabled",
  onClose,
  onClick
}: ImageMangerProps) => {
  const [imagesView, setImagesView] = useState<string>('grid');
  const [showImagePreview, setShowImagePreview] = useState<boolean>(false);
  const [images, setImages] = useState<ImageObject[]>([]);
  const [searchInputs, setSearchInputs] = useState<string>('');
  const [filteredImages, setFilteredImages] = useState<ImageObject[]>([]);
  // const [sortCriteria, setSortCriteria] = useState<string>('newest');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCurrentIndex, setSelectedCurrentIndex] = useState<number[]>([]);
  //Example Image Data - "jpg", "jpeg", "png"
  const imgFormat: string[] = [];
  // sorting Data
  const handleSort = (criteria: string): void => {
    let sorted = [...images];

    if (criteria === 'newest') {
      sorted = sorted.sort((a, b) => (b.UploadDate as number) - (a.UploadDate as number));
    } else if (criteria === 'oldest') {
      sorted = sorted.sort((a, b) => (a.UploadDate as number) - (b.UploadDate as number));
    } else if (criteria === 'name-az') {
      sorted = sorted.sort((a, b) => (a.fileName as string).localeCompare(b.fileName as string));
    } else if (criteria === 'name-za') {
      sorted = sorted.sort((a, b) => (b.fileName as string).localeCompare(a.fileName as string));
    }

    setImages(sorted);
    // setSortCriteria(criteria);
  };


  const handleSelectedItem = (index: number, maxImages: number | undefined) => {
    if (selectedCurrentIndex.includes(index)) {
      setSelectedCurrentIndex(selectedCurrentIndex.filter(item => item !== index));
    } else if (!maxImages || selectedCurrentIndex.length < maxImages) {
      setSelectedCurrentIndex([...selectedCurrentIndex, index]);
    }
  };
  
  // searching item
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchValue = event.target.value.toLowerCase();
    setSearchInputs(searchValue);

    const filteredImage = images.filter((image) =>
      (image.fileName).toLowerCase().includes(searchInputs)
    );
    setFilteredImages(filteredImage);
  };

  // List View
  const handleListView = (prev: string): void => {
    setImagesView(prev);
  };

  // Image Upload
  const handleImageUpload = (newFile: (string | number)[]): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setImages((prevImages: (string | number | (string | number)[] | any)[]) => [...prevImages, newFile]);
  };

  // Image Preview
  const handleImagePreview = (index: number): void => {
    setCurrentIndex(index);
    setShowImagePreview(true);
  };
  // close Image Preview
  const closeImagePreview = (): void => {
    setCurrentIndex(0);
    setShowImagePreview(false);
  };

  const handlePrevClick = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = (): void => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Modal
      cardBodyPadding='none'
      title={title}
      size='slg'
      buttonText={buttonText}
      loading={buttonLoader}
      buttonVariant={buttonVariant}
      scrollOff
      onClose={onClose}
      onClickFunc={onClick}
    >
      <div className={style.image_manager_wrapper}>
        <div className={style.image_manager_container}>
          <div className={style.header_area}>
            <ImageManagerHeader handleImageView={handleListView} handleInputChange={(event: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(event)} handleSort={handleSort} />
          </div>
          <div className={classNames(style.content_body, style.show_preview, !showImagePreview && style.manage_image_view_width)}>
            <div className={style.image_and_dropzone}>
              <div className={style.drop_zone}>
                <DropZone onImageUpload={handleImageUpload} imgFormat={imgFormat} setTime={1200} />
              </div>
              <div className={style.image_view}>
                <div className={classNames(style.images_list, imagesView === 'grid' ? style.grid_view : style.list_view)}>
                  {(searchInputs.length > 0) ? filteredImages.map((file, index) => (
                    <div key={index} style={{ margin: "10px" }}>
                      <div key={index} style={{ margin: "10px" }}>
                        <ImageCard selected={selectedCurrentIndex.includes(index)} imagesView={imagesView} handleImagePreview={()=> handleImagePreview(index)} handleSelectedItem={() => handleSelectedItem(index,2)} imgSource={file.url} imgName={file.fileName} fileExtension={file.fileExtentsion} />
                      </div>
                    </div>
                  )) :
                    (images.length > 0 && (images.map((file, index) => (
                      <div key={index} style={{ margin: "10px" }}>
                        <ImageCard selected={selectedCurrentIndex.includes(index)} imagesView={imagesView} handleImagePreview={()=> handleImagePreview(index)} handleSelectedItem={() => handleSelectedItem(index,2)} imgSource={file.url} imgName={file.fileName} fileExtension={file.fileExtentsion} />
                      </div>
                    ))
                    ))}
                </div>
              </div>
            </div>
            {showImagePreview && (
              <div className={classNames(style.preview, showImagePreview && style.active_preview)}>
                <PreviewSlide imgSource ={images} currentIndex={currentIndex} onClose={closeImagePreview} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
              </div>
            )} 
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ImageManager;
