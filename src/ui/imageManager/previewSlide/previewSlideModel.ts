
import type {ImageSchema} from "../imageManagerModel"
export type PreviewSlideProps ={
    images:Array<ImageSchema>
    currentId?:number;
    onShow:(param:boolean)=> void;
    onClose?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}