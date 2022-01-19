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
        <title>Next.js, Typescript, Tailwindcss & Chakra-Ui Template</title>
        <meta name="description" content="Web3.0 Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://nextjs.org">Next.js, TypeScript & Chakra-Ui!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing the Template
        </p>

        <Box my={5}>
          <Button bg="blue.300" onClick={toggleColorMode}>
            Color Mode
          </Button>
        </Box>

        <Box>
          <Button
            borderRadius="full"
            bgColor="blue.900"
            onClick={connectWallet}
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </Button>
        </Box>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
