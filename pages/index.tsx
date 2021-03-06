import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar, ContentLayout } from "../components";

export default function Home() {
  return (
    <Box w={{ base: "750px", md: "auto" }}>
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
