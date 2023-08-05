import data from "@/db.json"
import { NextApiRequest, NextApiResponse } from "next";
export default async function  handler(req:NextApiRequest,res:NextApiResponse) {
    if(req.method==="POST")
    {
        
      
        try {
            const {category}=req.body;
            const response=data.product.filter(c=>c._id==category);
            return res.status(200).json(response);
        } catch (error) {
          
            return res.status(400).json(error)
        }
    }
}