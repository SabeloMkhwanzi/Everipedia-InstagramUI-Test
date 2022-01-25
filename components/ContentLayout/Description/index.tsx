import React from "react";
import { Box, chakra, useColorModeValue, Link } from "@chakra-ui/react";

export default function Description() {
  return (
    <Box borderBottomWidth={1} pb={2}>
      <chakra.span
        fontSize="xs"
        textTransform="uppercase"
        color={useColorModeValue("brand.600", "brand.400")}
      >
        1.069 Likes
      </chakra.span>
      <Link
        isTruncated
        minW={90}
        display="block"
        color={useColorModeValue("gray.800", "white")}
        fontWeight="semibold"
        fontSize="md"
        mt={1}
        _hover={{ color: "gray.600", textDecor: "underline" }}
      >
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockup
        <span>more</span>
      </Link>
      <chakra.span
        fontSize="sm"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        Views all 100 comments
      </chakra.span>{" "}
      <br />{" "}
      <chakra.span
        fontSize="sm"
        textTransform="uppercase"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        1 hours ago
      </chakra.span>
    </Box>
  );
}
