import React from "react";
import {
  Box,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

export default function InfoButton() {
  const breakpoint = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Flex justifyContent="right">
      <IconButton
        bg="none"
        borderRadius="2xl"
        bottom={16}
        mx={6}
        size={breakpoint}
        w={50}
        aria-label="info button"
        color={useColorModeValue("gray.800", "inherit")}
        icon={<BsThreeDots />}
      />
    </Flex>
  );
}
