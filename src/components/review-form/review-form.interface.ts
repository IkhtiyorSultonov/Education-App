import { Schema } from "mongoose";

export interface IReviewForm{
    name:string,
    title:string,
    dscription:string,
    rating:number
}
export interface IReviewResponse{
	name:string,
	rating:number,
	description: string,
	title: string,
	id: number,
	productId: string,
}