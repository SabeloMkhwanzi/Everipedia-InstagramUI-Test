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
} from "@chakra-ui/react";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import { ImCompass2 } from "react-icons/im";
import { FiPlusSquare } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";

import { BsFillHouseDoorFill, BsHeart } from "react-icons/bs";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        borderRadius="2xl"
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
                <Button
                  borderRadius="2xl"
                  bg="purple.200"
                  w="150"
                  variant="solid"
                >
                  Color Mode
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Flex float="right" align="center">
                <Image
                  src="/Insta-logo.png"
                  alt="logo"
                  width={100}
                  height={40}
                />
              </Flex>
              {/* <Logo /> */}

              <VisuallyHidden>Instagram</VisuallyHidden>
            </chakra.a>
          </HStack>

          <HStack
            px="5"
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
                w={150}
                type="tel"
                borderRadius="2xl"
                placeholder="Search..."
              />
            </InputGroup>

            <chakra.a
              p={1}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
              <BsFillHouseDoorFill />
              <VisuallyHidden>Homepage</VisuallyHidden>
            </chakra.a>

            <chakra.a
              p={1}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
              <RiMessengerLine />
              <VisuallyHidden>message</VisuallyHidden>
            </chakra.a>

            <chakra.a
              p={1}
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
              p={1}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
              <BsHeart />
              <VisuallyHidden>Like</VisuallyHidden>
            </chakra.a>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
