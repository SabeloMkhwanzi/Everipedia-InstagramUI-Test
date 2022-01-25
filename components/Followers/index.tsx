import React from "react";
import {
  Avatar,
  chakra,
  Flex,
  useColorModeValue,
  Button,
  useBreakpointValue,
  Stack,
  HStack,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";

import { MainAccount, Footer } from "..";

export default function Followers() {
  const bg = useColorModeValue("gray.100", "gray.700");
  const breakpoint = useBreakpointValue({ base: "md", md: "lg" });

  const Followers = [
    {
      image:
        "https://images.unsplash.com/photo-1606913852449-8ebf553565cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "terylucas",
      follwed: "followed by terylucas + 2 more",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607957599370-f40c79556364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "laurmamtthews",
      follwed: "followed by laurmamtthews + 2 more",
    },
    {
      image:
        "https://images.unsplash.com/photo-1640448709256-50a08ed0b4fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80,",
      name: "harryprescott",
      follwed: "followed by harryprescott + 2 more",
    },
    {
      image:
        "https://images.unsplash.com/photo-1636140397397-1ae733c295ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "ednamanz",
      follwed: "followed by ednamanz + 2 more",
    },
    {
      image:
        "https://images.unsplash.com/photo-1636461932038-e32df32d2f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "christinaste",
      follwed: "followed by christinaste + 2 more",
    },
  ];
  return (
    <Flex
      w="100"
      alignItems="center"
      justifyContent="center"
      borderRadius="2xl"
      pb="700px"
    >
      <Stack
        direction={{ base: "column" }}
        w="100"
        bg={{ md: useColorModeValue("white", "gray.800") }}
        shadow="2xl"
        borderRadius="2xl"
      >
        <MainAccount />

        <HStack>
          <Box
            pl={5}
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            color="gray.500"
          >
            Suggestions For You
          </Box>
          <Box
            pl={48}
            fontWeight="semibold"
            as="button"
            lineHeight="tight"
            isTruncated
            color="gray.800"
          >
            See All
          </Box>
        </HStack>

        {Followers.map((Followers, pid) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={useColorModeValue("white", "gray.800")}
              borderRadius="2xl"
            >
              <HStack
                spacingY={3}
                columns={{ base: 1, md: 3 }}
                w="full"
                py={2}
                px={10}
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
                    pr="10rem"
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {Followers.name}
                  </Box>
                  <Box pl={4} as="span" color="gray.600" fontSize="sm">
                    {Followers.follwed}
                    <Button
                      bg="none"
                      borderRadius="2xl"
                      variant="solid"
                      size="sm"
                      color="blue.500"
                      left="2rem"
                    >
                      Follow
                    </Button>
                  </Box>
                </VStack>
              </HStack>
            </Flex>
          );
        })}
        <Footer />
      </Stack>
    </Flex>
  );
}
