import React from "react";
import Image from "next/image";
import {
  HStack,
  Box,
  IconButton,
  useColorModeValue,
  VStack,
  CloseButton,
  Button,
  Avatar,
  useDisclosure,
  useColorMode,
  Flex,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { AiOutlineMenu } from "react-icons/ai";

export default function MobileNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <HStack
      w={{ base: "750px", md: "auto" }}
      display="flex"
      spacing={3}
      alignItems="center"
    >
      <Box display={{ base: "750px", md: "none" }}>
        <IconButton
          display={{ base: "750px", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          color={useColorModeValue("gray.800", "inherit")}
          variant="ghost"
          icon={<AiOutlineMenu />}
          onClick={mobileNav.onOpen}
        />
        <VStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          display={mobileNav.isOpen ? "flex" : "none"}
          flexDirection="column"
          p={2}
          pb={4}
          m={2}
          bg={bg}
          spacing={3}
          rounded="sm"
          shadow="sm"
        ></VStack>
      </Box>
      <Box>
        <Image src="/Insta-logo.png" alt="logo" width={100} height={40} />
      </Box>
    </HStack>
  );
}
