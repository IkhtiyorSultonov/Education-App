import { firstLevelMenu } from "@/helpers/constants";
import { MenuItem } from "@/interfaces/menu.interface";
import { PageCategory, PageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { withLayout } from "@/layout/layout"
import Seo from "@/layout/seo/seo";
import { CoursePageComponents } from "@/page-components";
import axios from "axios"
import { GetServerSideProps } from "next"



const Index = ({products,firstCategory,page}:PageProps) => {
  return (
   <Seo metaTitle={page.title} metaDescription={page.description} metaKeyword={page.tags.toString()}>
     <CoursePageComponents products={products} page={page} firstCategory={firstCategory}/>
   </Seo>
  )
}

export default withLayout(Index)

export const getServerSideProps:GetServerSideProps<PageProps> = async ({ query }) => {
    const {slug,type}=query;
    const firstcategory=0;
    const firstCategortitem=firstLevelMenu.find(c=>c.route===type)
    const {data:menu}=await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}api/page-find`,{firstcategory:firstCategortitem?.id})
    const {data:page}=await axios.get<PageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}api/page-find/${slug}`);
    const {data:products}=await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}api/product-find`,{category:slug});
    return {
        props:{menu,page,products,firstcategory:firstCategortitem?.id}
    }
};

interface PageProps extends Record<string, unknown> {
	menu: MenuItem[];
	page: PageModel;
	products: ProductModel[];
  firstCategory:number;
}

