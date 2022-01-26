import React from "react";
import {
  Box,
  useColorModeValue,
  Text,
  Stack,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";

const profiles = [
  {
    title: "terrylucas",
    image:
      "https://images.unsplash.com/photo-1606913852449-8ebf553565cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

export default function Contentpic() {
  const breakpoint = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <div>
      <Box mt={4}>
        <Stack direction={"row"} mx={3} spacing={1} align={"center"}>
          {profiles.map((profile, index) => (
            <AvatarGroup key={index}>
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
                  bgGradient: "linear(to-bl, red.400,pink.400)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
                src={profile.image}
              />
              <Text
                textAlign="match-parent"
                fontSize="xs"
                fontWeight="semibold"
                pl={6}
              >
                {profile.title}
              </Text>
            </AvatarGroup>
          ))}
        </Stack>
      </Box>
    </div>
  );
}
