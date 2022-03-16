import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Header } from "../modules/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header>
        <Component {...pageProps} />;
      </Header>
    </ChakraProvider>
  );
}

export default MyApp;
