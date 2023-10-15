export type PreviewListProps = {
    id?: number;
    imgSource?: string;
    imgName?: string;
    fileExtension?: string | number;
    buttonLoader?: boolean;
    imagesView?:string;
    handleImagePreview: () => void;
    onImgSelect?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleSelectedItem: () => void;
    selected?:boolean;
  }