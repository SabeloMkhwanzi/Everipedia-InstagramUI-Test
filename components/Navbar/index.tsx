import React from "react";
import Image from "next/image";
import {
  Flex,
  chakra,
  HStack,
  Box,
  IconButton,
  useColorModeValue,
  VStack,
  CloseButton,
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

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import { ImCompass2 } from "react-icons/im";
import { FiPlusSquare } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";

import { BsFillHouseDoorFill, BsHeart } from "react-icons/bs";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="2xl"
        borderRadius="2xl"
        borderWidth={2}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
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
              >
                <CloseButton
                  borderRadius="2xl"
                  bg="purple.200"
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button borderRadius="full" bg="none" onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Avatar
                  size="sm"
                  name="Dan Abrahmov"
                  src="https://images.unsplash.com/photo-1642036048293-e0e2c3ff7599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80,"
                />
              </VStack>
            </Box>

            <Box>
              <Image src="/Insta-logo.png" alt="logo" width={100} height={40} />
            </Box>
          </HStack>

          <HStack
            px="25"
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineSearch />}
              />
              <Input
                w={130}
                type="tel"
                borderRadius="2xl"
                placeholder="Search..."
              />
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

            {/* <chakra.a
              p={1}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
              <ImCompass2 />
              <VisuallyHidden>Like</VisuallyHidden>
            </chakra.a> */}

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
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
