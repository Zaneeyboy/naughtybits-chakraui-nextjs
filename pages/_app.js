import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import "../src/theme/styles.css";

import Layout from "../src/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
