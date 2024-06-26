import { SortEnum } from "@/components/sort/sort.props"
import { ProductModel } from "@/interfaces/product.interface"

export type SortAction={type:SortEnum.Rating}|{type:SortEnum.Price}|{type:"reset"; intialState:ProductModel[]}
export interface SortReducerState{
    sort:SortEnum;
    products:ProductModel[];
}

export const SortReducer=(state:SortReducerState,action:SortAction)=>{
switch (action.type) {
    case SortEnum.Rating:
        return{
            sort:SortEnum.Rating,
            products:state.products.sort((a,b)=>(a.initialRating>b.initialRating? -1:1))
        };
       
    case SortEnum.Price:
        return{
            sort:SortEnum.Price,
            products:state.products.sort((a,b)=>(a.price>b.price? 1:-1))
        };
        case 'reset':
			return {
				sort: SortEnum.Rating,
				products: action.intialState,
			};

    default:
        throw new Error("Somthing went wrong")
       
}
}