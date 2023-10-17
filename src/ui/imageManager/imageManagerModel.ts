export type ImageMangerProps = {
  title?:string;
  buttonText?:string;
  buttonLoader?:boolean;
  buttonVariant?:"link" | "default" | "info" | "danger" | "success" | "warning" | "disabled" | "white" ;
  selectLimit?: number;
  onClose: () => void;
  onClick: () => void;
};

export type ImageSchema = {
  _id: number;
  url: string;
  file_name: string;
  height?: string;
  width?: string;
  createdAt:string | number;
}

   