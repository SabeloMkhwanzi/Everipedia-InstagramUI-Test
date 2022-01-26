import React from "react";
import {
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  Flex,
  Stack,
} from "@chakra-ui/react";

import { BsHeart } from "react-icons/bs";
import { RiChat1Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";

export default function SocialIcon() {
  const breakpoint = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Flex>
      <Stack direction="row">
        <IconButton
          bg="none"
          borderRadius="2xl"
          w={50}
          aria-label="social icon"
          color={useColorModeValue("gray.800", "inherit")}
          icon={<BsHeart />}
        />
        <IconButton
          bg="none"
          borderRadius="2xl"
          w={50}
          aria-label="social icon"
          color={useColorModeValue("gray.800", "inherit")}
          icon={<RiChat1Line />}
        />
        <IconButton
          bg="none"
          borderRadius="2xl"
          w={50}
          aria-label="social icon"
          color={useColorModeValue("gray.800", "inherit")}
          icon={<FiSend />}
        />
      </Stack>
    </Flex>
  );
}
