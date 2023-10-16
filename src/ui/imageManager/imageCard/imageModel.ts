import { ImageSchema } from "../imageManagerModel";

export type PreviewListProps = {
    image:ImageSchema;
    buttonLoader?: boolean;
    className?:string;
    selected?:boolean;
    onCurrentPreview?: (id:number) => void;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onSelect?: (id: number) => void;
  }