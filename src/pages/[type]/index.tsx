import { firstLevelMenu } from '@/helpers/constants'
import { MenuItem } from '@/interfaces/menu.interface'
import { withLayout } from '@/layout/layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'

const Type = () => {
  return (
    <div>Type</div>
  )
}

export default withLayout(Type)

export const getServerSideProps: GetServerSideProps<TypeProps> = async ({ query }) => {
  const {type}=query

  if(!type)
  {
    return{
        notFound:true
    }
  }

  const firtCategoryItem=firstLevelMenu.find(m=>m.route===type)

  if(!firtCategoryItem)
  {
    return{
        notFound:true
    }
  }
  
  
  const {data:menu}=await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}api/page-find`,{firstcategory:firtCategoryItem.id,})

  return{
    props:{
        menu,
        firstCategory:firtCategoryItem.id,
    },
  }

}
interface TypeProps extends Record<string, unknown>{
    menu:MenuItem[];
    firstCategory:number;
}