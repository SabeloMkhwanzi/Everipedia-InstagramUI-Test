import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Button, useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  //Wallet connect function
  const connectWallet = () => {};

  return (
    <div className={styles.container}>
      <Head>
        <title>Everipedia-InstagramUI-Test</title>
        <meta name="description" content="Everipedia-InstagramUI-Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
