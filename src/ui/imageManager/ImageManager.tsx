import React, { useState, ChangeEvent, useEffect } from 'react';
import style from './imageManager.module.scss';
import { Modal } from '../modal';
import { ImageMangerProps } from './imageManagerModel';
import { ImageSchema } from './imageManagerModel';
import { ImageManagerHeader } from './imageManagerHeader';
import { classNames } from '@/utils';
import { ImageCard } from './imageCard';
import { PreviewSlide } from './previewSlide';
import { DropZone } from '../dropzone';
import data from "./data.json"

const ImageManager = ({
  title = "Select image",
  buttonText = "Done",
  buttonLoader,
  buttonVariant = "disabled",
  selectLimit,
  onClose,
  onClick
}: ImageMangerProps) => {
  const [imagesView, setImagesView] = useState<string>('grid');
  const [showImagePreview, setShowImagePreview] = useState<boolean>(false);
  const [images, setImages] = useState<ImageSchema[]>([]);
  const [searchInputs, setSearchInputs] = useState<string>('');
  const [filteredImages, setFilteredImages] = useState<ImageSchema[]>([]);
  // const [sortCriteria, setSortCriteria] = useState<string>('newest');
  const [selectedCurrentItem, setSelectedCurrentIndex] = useState<number[]>([]);
  const [previewImgId, setPreviewImgId] = useState<number>(0);
  //Example Image Data - "jpg", "jpeg", "png"
  const imgFormat: string[] = [];
  // sorting Data
  const handleSort = (criteria: string): void => {
    let sorted = [...images];
    if (criteria === 'newest') {
      sorted = sorted.sort((a, b) => (b.createdAt as number) - (a.createdAt  as number));
    } else if (criteria === 'oldest') {
      sorted = sorted.sort((a, b) => (a.createdAt  as number) - (b.createdAt  as number));
    } else if (criteria === 'name-az') {
      sorted = sorted.sort((a, b) => (a.file_name as string).localeCompare(b.file_name as string));
    } else if (criteria === 'name-za') {
      sorted = sorted.sort((a, b) => (b.file_name as string).localeCompare(a.file_name as string));
    }

    setImages(sorted);
  };

  // Image Preview
  const handleSelectImage = (_id: number) => {
    setPreviewImgId(_id);
    setShowImagePreview(true);
  };

  const handleSelectedItem = (imgId: number) => {
    if (selectedCurrentItem.includes(imgId)) {
      setSelectedCurrentIndex(selectedCurrentItem.filter(item => item !== imgId));
    } else if (!selectLimit || selectedCurrentItem.length < selectLimit) {
      setSelectedCurrentIndex([...selectedCurrentItem, imgId]);
    }
  };

  // searching item
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchValue = event.target.value.toLowerCase();
    setSearchInputs(searchValue);

    const filteredImage = images.filter((image) =>
      (image.file_name).toLowerCase().includes(searchInputs)
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

  // console.log(selectedCurrentItem);
  useEffect(() => {
    setImages(data)
  }, [])
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
            {/* images={images} selectedItem = {selectedCurrentItem} */}
            <ImageManagerHeader handleImageView={handleListView} handleInputChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event)} handleSort={handleSort} />
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
                        <ImageCard image={file} selected={selectedCurrentItem.includes(file._id)} className={imagesView} onCurrentPreview={handleSelectImage} onSelect={handleSelectedItem}  />
                      </div>
                    </div>
                  )) :

                    (images.length > 0 && (images.map((file, index) => (
                      <div key={index} style={{ margin: "10px" }}>
                        <ImageCard image={file} selected={selectedCurrentItem.includes(file._id)} className={imagesView} onCurrentPreview={handleSelectImage} onSelect={handleSelectedItem} />
                      </div>
                    ))
                    ))}
                </div>
              </div>
            </div>
            {showImagePreview && (
              <div className={classNames(style.preview, showImagePreview && style.active_preview)}>
                <PreviewSlide images={images} onShow={setShowImagePreview} currentId={previewImgId} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ImageManager;
