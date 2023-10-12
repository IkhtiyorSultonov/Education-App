import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface reviewFormProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    productid:string;
}