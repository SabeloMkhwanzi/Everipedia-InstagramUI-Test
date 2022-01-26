import React from "react";
import {
  Box,
  Heading,
  useColorModeValue,
  Text,
  Stack,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
} from "@chakra-ui/react";

const profiles = [
  {
    title: "story",
    image:
      "https://images.unsplash.com/photo-1606913852449-8ebf553565cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    title: "terrylucas",
    image:
      "https://images.unsplash.com/photo-1607957599370-f40c79556364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "lauramtt..",
    image:
      "https://images.unsplash.com/photo-1640448709256-50a08ed0b4fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80,",
  },
  {
    title: "harryprescott",
    image:
      "https://images.unsplash.com/photo-1636140397397-1ae733c295ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "ednamanz..",
    image:
      "https://images.unsplash.com/photo-1636461932038-e32df32d2f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "christinaste..",
    image:
      "https://images.unsplash.com/photo-1641015525475-e7dec2514b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "johnschhmint",
    image:
      "https://images.unsplash.com/photo-1642036048293-e0e2c3ff7599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80,",
  },
];

export default function Status() {
  return (
    <div>
      <Box mt={4}>
        <Stack direction={"row"} my={1} mx={4} spacing={6} align={"center"}>
          {profiles.map((profile, index) => (
            <AvatarGroup key={index}>
              <Avatar
                name="profile"
                fit="cover"
                size={useBreakpointValue({ base: "sm", md: "lg" })}
                position={"relative"}
                zIndex={2}
                _before={{
                  content: '""',
                  width: "full",
                  height: "full",
                  rounded: "full",
                  transform: "scale(1.125)",
                  bgGradient: "linear(to-bl, red.400,pink.400)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
                src={profile.image}
              />
              <Text pt={20} fontSize="xs" ml={2}>
                {/* {profile.title} */}
              </Text>
            </AvatarGroup>
          ))}
        </Stack>
      </Box>
    </div>
  );
}
