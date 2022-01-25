import React from "react";
import {
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";

import { BsBookmark } from "react-icons/bs";

export default function Bookmark() {
  const breakpoint = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Flex justifyContent="right">
      <IconButton
        bg="none"
        borderRadius="2xl"
        bottom={9}
        w={50}
        aria-label="social icon"
        color={useColorModeValue("gray.800", "inherit")}
        icon={<BsBookmark />}
      />
    </Flex>
  );
}
