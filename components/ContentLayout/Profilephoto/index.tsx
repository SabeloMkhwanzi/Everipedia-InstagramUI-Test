import React from "react";
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

export default function Profilephoto() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      alignItems="center"
      justifyContent="center"
    >
      <Image
        roundedTop="2xl"
        w="full"
        h="600"
        fit="cover"
        src="https://images.unsplash.com/photo-1607957599370-f40c79556364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Article"
      />
    </Flex>
  );
}
