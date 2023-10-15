export type PreviewSlideProps ={
    imgSource: {  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      UploadDate: any;
      fileName:string;
      url: string;
      fileExtentsion: string;
    };
    imgName?: string;
    imgSize?: string;
    fileExtension?: string;
    currentIndex?:number;
    handlePrevClick?:()=>void;
    handleNextClick?:()=>void;
    onClose?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }