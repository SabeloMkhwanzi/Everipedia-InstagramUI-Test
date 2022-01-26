import React from "react";
import {
  chakra,
  HStack,
  useColorModeValue,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  VisuallyHidden,
  Avatar,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { ImCompass2 } from "react-icons/im";

import { AiOutlineSearch } from "react-icons/ai";

import { FiPlusSquare } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";

import { BsFillHouseDoorFill, BsHeart } from "react-icons/bs";

export default function WebNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <HStack
      px={1}
      spacing={3}
      display={mobileNav.isOpen ? "none" : "flex"}
      alignItems="center"
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<AiOutlineSearch />} />
        <Input w="xs" type="tel" borderRadius="2xl" placeholder="Search..." />
      </InputGroup>

      <chakra.a
        p={0.5}
        color={useColorModeValue("gray.800", "inherit")}
        rounded="sm"
        _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
      >
        <BsFillHouseDoorFill />
        <VisuallyHidden>Homepage</VisuallyHidden>
      </chakra.a>

      <chakra.a
        p={0.5}
        color={useColorModeValue("gray.800", "inherit")}
        rounded="sm"
        _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
      >
        <RiMessengerLine />
        <VisuallyHidden>message</VisuallyHidden>
      </chakra.a>

      <chakra.a
        p={0.5}
        color={useColorModeValue("gray.800", "inherit")}
        rounded="sm"
        _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
      >
        <FiPlusSquare />
        <VisuallyHidden>Like</VisuallyHidden>
      </chakra.a>

      <chakra.a
        p={1}
        color={useColorModeValue("gray.800", "inherit")}
        rounded="sm"
        _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
      >
        <ImCompass2 />
        <VisuallyHidden>Like</VisuallyHidden>
      </chakra.a>

      <chakra.a
        p={0.5}
        color={useColorModeValue("gray.800", "inherit")}
        rounded="sm"
        _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
      >
        <BsHeart />
        <VisuallyHidden>Like</VisuallyHidden>
      </chakra.a>

      <Button borderRadius="full" bg="none" onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>

      <Avatar
        size="sm"
        name="Dan Abrahmov"
        src="https://images.unsplash.com/photo-1642036048293-e0e2c3ff7599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80,"
      />
    </HStack>
  );
}
