import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

export default function Comments() {
  const [post, setPost] = React.useState(false);
  const handleClick = () => setPost(!post);

  return (
    <InputGroup size="md" my={2}>
      <Input
        borderWidth={0}
        pr="4.5rem"
        type={post ? "text" : "password"}
        placeholder="Add a comment..."
      />
      <InputRightElement width="4.5rem">
        <Button
          w={90}
          borderRadius="2xl"
          bg="none"
          h="3rem"
          size="sm"
          onClick={handleClick}
        >
          {post ? "sent" : "post"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
