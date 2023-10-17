import {DetailedHTMLProps,HTMLAttributes,} from "react"
import Menu from "./icon/menu.svg"
import Close from "./icon/close.svg"
import Up from "./icon/up.svg"

export const icons ={Up,Close,Menu} 
export type Icontype = keyof typeof icons;

export interface IcoButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    icon:Icontype,
    appearance:"primary"|"white",
}