import { ProductModel } from "@/interfaces/product.interface";
import { DetailedHTMLProps,HTMLAttributes } from "react";

export interface productProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    product:ProductModel;
}