import React from "react";
import { Box, Flex, useColorModeValue, SimpleGrid } from "@chakra-ui/react";

import {
  SocialIcon,
  InfoButton,
  Contentpic,
  Status,
  Bookmark,
  Description,
  Comments,
  Profilephoto,
  Followers,
} from "..";

export default function ContentLayout() {
  return (
    <div>
      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        mx="auto"
      >
        <SimpleGrid columns={[1, null, 2]} spacing={4}>
          <Box
            mx="auto"
            rounded="lg"
            shadow="2xl"
            bg={useColorModeValue("white", "gray.800")}
            maxW="xl"
            borderRadius="2xl"
          >
            <Status />
            <Contentpic />
            <InfoButton />

            <Profilephoto />

            <Box p={6}>
              <SocialIcon />
              <Bookmark />
              <Description />
              <Comments />
            </Box>
          </Box>
          <Followers />
        </SimpleGrid>
      </Flex>
    </div>
  );
}
