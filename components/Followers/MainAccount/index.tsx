import React from "react";
import {
  Avatar,
  Flex,
  useColorModeValue,
  Button,
  useBreakpointValue,
  HStack,
  VStack,
  Box,
} from "@chakra-ui/react";

export default function Followers() {
  const bg = useColorModeValue("gray.100", "gray.700");
  const breakpoint = useBreakpointValue({ base: "lg", md: "xl" });

  const Followers = [
    {
      image:
        "https://images.unsplash.com/photo-1606913852449-8ebf553565cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "terylucas",
      follwed: "followed by terylucassyle + 2 more",
    },
  ];

  return (
    <Flex alignItems="center" justifyContent="center" borderRadius="2xl">
      {Followers.map((Followers, pid) => {
        return (
          <Flex
            direction={{ base: "row", md: "column" }}
            bg={useColorModeValue("", "gray.800")}
            borderRadius="2xl"
          >
            <HStack
              spacingY={3}
              columns={{ base: 1, md: 3 }}
              w="full"
              py={2}
              fontWeight="hairline"
              key={pid}
              borderRadius="2xl"
            >
              <Avatar
                name="profile"
                fit="cover"
                size={breakpoint}
                position={"relative"}
                zIndex={2}
                _before={{
                  content: '""',
                  width: "full",
                  height: "full",
                  rounded: "full",
                  transform: "scale(1.125)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
                src={Followers.image}
              />
              <VStack>
                <Box
                  pr="12rem"
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {Followers.name}
                </Box>
                <Box
                  color={useColorModeValue("gray.900", "gray.400")}
                  pl={4}
                  as="h6"
                  fontSize="sm"
                >
                  {Followers.follwed}
                  <Button
                    bg="none"
                    borderRadius="2xl"
                    variant="solid"
                    size="sm"
                    color="blue.500"
                    left="1rem"
                  >
                    Follow
                  </Button>
                </Box>
              </VStack>
            </HStack>
          </Flex>
        );
      })}
    </Flex>
  );
}
