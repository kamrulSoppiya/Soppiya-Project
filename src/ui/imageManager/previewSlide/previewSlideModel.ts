export type imgSource=[{  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UploadDate: any;
    fileName:string;
    url: string;
    fileExtentsion: string;
  }];
export type PreviewSlideProps ={
    imgName?: string;
    imgSize?: string;
    fileExtension?: string;
    currentIndex?:number;
    handlePrevClick?:()=>void;
    handleNextClick?:()=>void;
    onClose?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }