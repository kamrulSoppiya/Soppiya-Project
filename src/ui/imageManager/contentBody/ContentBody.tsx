import React, { useState } from 'react'
import style from "./contentBody.module.scss"
// import { ContentBodyHeader } from '../imageManagerHeader'
import PreviewList from '../imageCard/ImageCard'
import { PreviewSlide } from '../previewSlide'
import { classNames } from '@/utils'

const ContentBody = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [imgGridView, setImgGridView] = useState(false)
    const [imgListView, setImgListView] = useState(false)
    const handleGridView = () => {

        !imgGridView && setImgGridView(true)
        imgListView && setImgListView(false)
    }
    const handleListView = () => {
        !imgListView && setImgListView(true)
        imgGridView && setImgGridView(false)
    }

    const handleImageUpload = (file: File, base64Img: string) => {
        console.log('Uploaded File:', file);
        console.log('Base64:', base64Img);
    };

    const imgFormat: string[] = ["jpg", "jpeg", "png"];
    return (
        <div className={style.content_body}>
            <div className={style.inner}>
                <div className={style.header}>
                    {/* <ContentBodyHeader gridView={handleGridView} listView={handleListView} /> */}
                </div>
                <div className={classNames(style.body, showPreview && style.show_preview)}>
                    <div className={style.drop_zone_and_images}>
                        <div className={style.drop_zone}>
                            {/* <DropZone onImageUpload={handleImageUpload} imgFormat={imgFormat} setTime={12000} /> */}
                        </div>
                        <div className={style.preview}>
                            <PreviewList gridView={imgGridView} listView={imgListView} onClick={() => setShowPreview(true)} />
                        </div>
                    </div>
                    {
                        showPreview && <div className={style.preview_slide}>
                            <PreviewSlide
                                onClose={() => setShowPreview(false)}
                                fileExtension='PNG'
                                imgName='My photo'
                                imgSize='500 x 500'
                                imgSource='https://cdn.shopify.com/s/files/1/0811/1279/3374/files/Alamin00_150x.png?v=1696734988'

                            />
                        </div>
                    }


                </div>
            </div>
        </div>
    )
}

export default ContentBody