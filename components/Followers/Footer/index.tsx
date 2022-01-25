import React from "react";
import { chakra, useColorModeValue, Flex, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex alignItems="center" justifyContent="center" borderRadius="2xl" pb={2}>
      <Box>
        <chakra.span
          fontSize="xs"
          color={useColorModeValue("gray.400", "gray.400")}
          as="h1"
        >
          ·About ·Help ·Press ·API ·Jobs ·Privacy ·Terms <br /> ·Locations ·Top
          Accounts ·Hashtags ·Language ·English
          <br /> © 2022 INSTAGRAM FROM META
        </chakra.span>
      </Box>
    </Flex>
  );
}
