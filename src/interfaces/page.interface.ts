export enum PageCategory {
    Courses,
    Books,
}


export interface PageModel{
    _id:string;
    alias:string;
    title: string;
    tags:string[];
    description:string;
    hh:HhData[];
    advantages:AdvantegData[];

    
}

export interface HhData{
    count:number;
    juniorSalary:number;
    middleSalary:number;
    seniorSalary:number;
}

export interface AdvantegData{
    title:string;
    description:string;
    id:string;
}