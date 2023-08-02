import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    rating:number;
    isEditablet?:Boolean;
    setReting?:(rating:number)=>void;

}