import Head from "next/head";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Navbar, ContentLayout, Followers } from "../components";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Everipedia-InstagramUI-Test</title>
        <meta name="description" content="Everipedia-InstagramUI-Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <ContentLayout />
    </Box>
  );
}
