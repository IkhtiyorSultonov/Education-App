import {
  Button,
  Card,
  Heading,
  Input,
  Rating,
  Tag,
  Text,
  TextArea,
} from "@/components";
import  { withLayout } from "../layout/layout";
import { useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
<<<<<<< HEAD
const index = () => {
  
=======
import { MenuItem } from "@/interfaces/menu.interface";
const index = ({firstcategory,menu}:HomeProps):JSX.Element => {
  
console.log(menu);
>>>>>>> 19b2343 (Context provider)

  
  const [isClick, setisClick] = useState(false);
  const [rating, setrating] = useState<number>(4);
  return (
    <>
<<<<<<< HEAD
      <header>
=======
      
>>>>>>> 19b2343 (Context provider)
        <Heading tag="h2">nma</Heading>
        <Text size="s">Text</Text>
        <Tag size="m" color="red">
          Red
        </Tag>
        <Tag size="m" color="green">
          Green
        </Tag>
        <br />
        <Button appearence="primary">Primary</Button>
        <Button appearence="ghost">Ghost</Button>
        <Button
          appearence="ghost"
          arrow={isClick ? "down" : "right"}
          onClick={() => setisClick((prev) => !prev)}
        >
          Arrow
        </Button>
        <Button appearence="primary" arrow="down">
          Down
        </Button>
        <br />
        <br />
        <Input placeholder="Enter" />
        <br />
        <br />
        <TextArea placeholder="Message" />
        <br />
        <br />
        <Rating rating={rating} isEditablet={true} setReting={setrating} />

        <Card color="white" style={{ marginTop: "30px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, quos
          accusamus fugit est enim quas. Fugit numquam sint reiciendis dolore
          voluptatem placeat nulla dolores autem deleniti quibusdam quam, culpa
          eaque? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet ipsa fugiat nihil incidunt! Quas animi asperiores culpa odit
          optio esse molestiae eaque autem, molestias accusantium, et tenetur
          quis perferendis cumque.
        </Card>
        <Card color="primary" style={{ marginTop: "30px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, quos
          accusamus fugit est enim quas. Fugit numquam sint reiciendis dolore
          voluptatem placeat nulla dolores autem deleniti quibusdam quam, culpa
          eaque? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet ipsa fugiat nihil incidunt! Quas animi asperiores culpa odit
          optio esse molestiae eaque autem, molestias accusantium, et tenetur
          quis perferendis cumque.
        </Card>
<<<<<<< HEAD
      </header>
=======
    
 
    
      
>>>>>>> 19b2343 (Context provider)
    </>
  );
};

export default withLayout(index);

<<<<<<< HEAD
export const getServerSideProps:GetServerSideProps=async ({}) =>{

  const {data}=await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}api/page-find`,{"firstcategory":0})
  return{
    props:{
      data,
    },
  }
=======
export const getServerSideProps:GetServerSideProps<HomeProps>=async ({}) =>{
  const firstcategory=0
  const {data:menu}=await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}api/page-find`,{firstcategory})
  return{
    props:{
      menu,
      firstcategory,
    },
  }
}


interface HomeProps extends Record<string,unknown>{
  firstcategory:number;
  menu:MenuItem[];
>>>>>>> 19b2343 (Context provider)
}