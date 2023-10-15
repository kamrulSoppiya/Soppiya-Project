import { useEffect, useState, ChangeEvent, DragEvent } from "react";
import style from './dropzone.module.scss';
import React from "react";

type dropZoneProps = {
  imgFormat: string[];
  setTime?: number;
  onImageUpload: (file: newFileProps |string | number | (string |number)[]) => void;
}

type newFileProps = {
  id: number;
  url: string;
  fileName: string;
  fileType: string;
  fileExtentsion:string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  UploadDate:any;
}

const DropZone = ({ onImageUpload, imgFormat = [], setTime }: dropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<{ status: boolean, msg: string }>({
    status: false, msg: ''
  });

  // Drag And Drop
  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true);
  };

  // Generate a random integer Id
  function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
 // Function for base64 and Data onLoad
 const dataOnLoad = (file: File) => {
  if (file && isSupportedImageFormat(file, imgFormat)) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const newFile: newFileProps = {
        id:0,
        url: '',
        fileName: '',
        fileType:'',
        fileExtentsion:'',
        UploadDate:'',
      }
      newFile.id= getRandomInt(1000, 10000);
      const base64Image = event.target!.result as string;
      newFile.url = base64Image;
      newFile.fileType = file.type;
      newFile.fileName = file.name.split('.')[0];
      newFile.fileExtentsion = file.name.split('.')[1];
      newFile.UploadDate = file.lastModified;
      onImageUpload(newFile);
    };
    reader.readAsDataURL(file);
  } else {
    setError({
      status: true,
      msg: `File type is not valid`,
    });
  }
};

const handleDrop = (event: DragEvent<HTMLDivElement>) => {
  setIsDragging(false);
  event.preventDefault();
  const files = Array.from(event.dataTransfer.files);
  files.map((file) => dataOnLoad(file));
};

 // Image Uploader
 const handleImageUploader = (event: ChangeEvent<HTMLInputElement>) => {
  const files = Array.from(event.target.files || []);
  files.forEach((file) => dataOnLoad(file));
};


const isSupportedImageFormat = (file: File, imgFormat: string[]) => {
  if (imgFormat.length === 0) {
    return true;
  }
  const conCatData = imgFormat.map((element) => 'image/' + element);
  return conCatData.includes(file.type);
};


useEffect(() => {
  if (!error.status) return;
  const timer = setTimeout(() => {
    setError({ status: false, msg: '' });
  }, setTime ? setTime : 400);

  return () => clearTimeout(timer);
}, [error.status, setTime]);


  return (
    <div className={style.row}>
      <div className={style.container}>
        {error.status && (
          <div className={style.containerUnvalid}>
            <div className={style.content}>
              <p>{error.msg}</p>
            </div>
          </div>
        )}

        {!error.status && (
          <div className={`drop-zone ${isDragging ? 'dragging' : ''} ${style.containerItem}`}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragOver={(event) => event.preventDefault()}
          >
            <label htmlFor="file-input" className="custom-file-label">
              <span className={style.btnDrag}>Add images</span>
            </label>
            <input
              type="file"
              accept={imgFormat.join(',')}
              onChange={handleImageUploader}
              style={{ display: 'none' }}
              id="file-input"
              multiple
            />
            <p>or drag and drop</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropZone;
