import { PageCategory } from "@/interfaces/page.interface";
import CoursesIcon from "./icons/course.svg"
import BooksIcon from "./icons/books.svg"
import { IFirstlevelMenu } from "@/interfaces/menu.interface";


export const firstLevelMenu:IFirstlevelMenu[] = [
    { route: "courses", name: "Courses", icon:<CoursesIcon/>, id:PageCategory.Courses},
    { route: "books", name: "Books", icon: <BooksIcon/>, id:PageCategory.Books},
];