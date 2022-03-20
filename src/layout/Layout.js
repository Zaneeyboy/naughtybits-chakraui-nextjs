//jshint esversion:9

import { Box } from "@chakra-ui/react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

const Layout = ({ children }) => {
  return (
    <Box zIndex={1}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
