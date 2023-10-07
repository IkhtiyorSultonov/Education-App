<<<<<<< HEAD
import { PageCategory } from "./page.interface";

=======
>>>>>>> 237a4ab84afbe28de012d3037d0382f9862f02c0
export interface MenuItem {
    _id:{
        secondCategory:string;
    };
<<<<<<< HEAD
    isOpened?:boolean;
=======
>>>>>>> 237a4ab84afbe28de012d3037d0382f9862f02c0
    pages:PageItem[];
}
export interface PageItem {
    alias:string;
    title:string;
    _id:string
    category:string;
}
<<<<<<< HEAD

export interface IFirstlevelMenu{
    route:string;
    name:string;
    icon:JSX.Element;
    id:PageCategory;
}
=======
>>>>>>> 237a4ab84afbe28de012d3037d0382f9862f02c0
