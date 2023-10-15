export type ImageMangerProps = {
  title?:string;
  buttonText?:string;
  buttonLoader?:boolean;
  buttonVariant?:"link" | "default" | "info" | "danger" | "success" | "warning" | "disabled" | "white" ;
  fileExtentsion?: string;
  fileName: (string | number)[];
  onClose: () => void;
  onClick: () => void;
  currentIndex?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleInputChange:()=>void;
  
};

export type ImageObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  UploadDate: any;
  fileName:string;
  url: string;
  fileExtentsion: string;
}

   