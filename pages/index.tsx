import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../components";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Everipedia-InstagramUI-Test</title>
        <meta name="description" content="Everipedia-InstagramUI-Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </Box>
  );
}
