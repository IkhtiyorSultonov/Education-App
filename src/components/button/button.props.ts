import { ReactNode ,DetailedHTMLProps,ButtonHTMLAttributes} from "react";


export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    arrow?:'right'|'down'|'none';
    appearence:'primary'| 'ghost'|'success'|'failure';
    size:'s'|'m'|'l';
    children:ReactNode;
}