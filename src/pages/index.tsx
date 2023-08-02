import { Button, Card, Heading, Input, Rating, Tag, Text, TextArea } from "@/components";
import { useState } from "react";

const index = () => {

  const [isClick, setisClick] = useState(false)
  const [rating, setrating] = useState<number>(4)
  return (
    <div >
      <Heading tag="h2">nma</Heading>
      <Text  size="s">Text</Text>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="m" color="green" >
        Green
      </Tag>
      <br />
      <Button appearence="primary">Primary</Button>
      <Button appearence="ghost">Ghost</Button>
      <Button appearence="ghost" arrow={isClick? "down":"right"} onClick={()=>setisClick(prev=>!prev)}>Arrow</Button>
      <Button appearence="primary" arrow="down">Down</Button>
      <br />
      <br />
      <Input placeholder="Enter"/>
      <br />
      <br />
      <TextArea placeholder="Message"/>
      <br />
      <br />
      <Rating rating={rating} isEditablet={true} setReting={setrating}/>

      <Card color="white" style={{marginTop:"30px"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, quos accusamus fugit est enim quas. Fugit numquam sint reiciendis dolore voluptatem placeat nulla dolores autem deleniti quibusdam quam, culpa eaque?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ipsa fugiat nihil incidunt! Quas animi asperiores culpa odit optio esse molestiae eaque autem, molestias accusantium, et tenetur quis perferendis cumque.
      </Card>
      <Card color="primary" style={{marginTop:"30px"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, quos accusamus fugit est enim quas. Fugit numquam sint reiciendis dolore voluptatem placeat nulla dolores autem deleniti quibusdam quam, culpa eaque?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ipsa fugiat nihil incidunt! Quas animi asperiores culpa odit optio esse molestiae eaque autem, molestias accusantium, et tenetur quis perferendis cumque.
      </Card>
    </div>
  );
};

export default index;
