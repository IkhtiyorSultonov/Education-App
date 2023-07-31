import { Button, Heading, Input, Tag, Text, TextArea } from "@/components";
import { useState } from "react";

const index = () => {

  const [isClick, setisClick] = useState(false)
  return (
    <div>
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
      <Input placeholder="Enter"/>
      <br />
      <TextArea placeholder="Message"/>
    </div>
  );
};

export default index;
