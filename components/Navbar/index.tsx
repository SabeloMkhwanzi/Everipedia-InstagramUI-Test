import React from "react";
import {
  Flex,
  chakra,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

import { MobileNav, WebNav } from "..";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w={{ base: "750px", md: "auto" }}
        //w="700px"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="2xl"
        borderRadius="2xl"
        borderWidth={2}
        mx="full"
      >
        <Flex mx="full" alignItems="center" justifyContent="space-between">
          <MobileNav />
          <WebNav />
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
