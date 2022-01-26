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
        src="https://images.unsplash.com/photo-1636140397397-1ae733c295ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Article"
      />
    </Flex>
  );
}
