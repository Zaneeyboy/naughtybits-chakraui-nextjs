//jshint esversion:6
import { useBreakpointValue } from "@chakra-ui/react";
import {
  Flex,
  Spacer,
  IconButton,
  Box,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

export const Nav = () => {
  return (
    <>
      <NextLink href="/shop" passHref>
        <Link mb={("5%", "3%")} mr={("1.5", "3")} fontWeight={"500"}>
          Shop
        </Link>
      </NextLink>
      <NextLink href="/massages" passHref>
        <Link mb={("5%", "3%")} mr={("1.5", "3")} fontWeight={"500"}>
          Massages
        </Link>
      </NextLink>
      <NextLink href="/workshops" passHref>
        <Link mb={("5%", "3%")} mr={("1.5", "3")} fontWeight={"500"}>
          Workshops
        </Link>
      </NextLink>
      <NextLink href="/contact" passHref>
        <Link mb={("5%", "3%")} mr={("1.5", "3")} fontWeight={"500"}>
          Contact
        </Link>
      </NextLink>
    </>
  );
};

export default function Navbar() {
  const [display, changeDisplay] = useState("none");
  const [isNavOpen, setisNavOpen] = useState(false);
  const { toggleColorMode } = useColorMode();
  const [icon, toggleIcon] = useState("moon");

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const colorScheme = useColorModeValue("gray", "purple");

  function clickIcon() {
    icon == "moon" ? toggleIcon("sun") : toggleIcon("moon");
  }

  return (
    <header>
      <Flex
        bg={bgColor}
        align="center"
        alignContent={"center"}
        p={isNavOpen ? "0" : ["3% 5%", "3% 7%", "3% 10%"]}
      >
        <Box display={isNavOpen ? "none" : "flex"}>
          <NextLink href="/" passHref size={["s", "md", "lg", "xl"]}>
            <Link>
              <Heading alignSelf={"center"} fontSize={["sm", "md", "lg", "xl"]}>
                Naughty Bits
              </Heading>
            </Link>
          </NextLink>
        </Box>
        <Spacer />
        <Flex display={["none", "none", "none", "flex"]}>
          <Nav />
        </Flex>
        <IconButton
          colorScheme={colorScheme}
          mr={("1.5", "3")}
          icon={<VscAccount />}
          size={useBreakpointValue(["sm", "md", "lg"])}
          display={isNavOpen ? "none" : "flex"}
        />
        <IconButton
          colorScheme={colorScheme}
          mr={("1.5", "3")}
          icon={<AiOutlineShoppingCart />}
          size={useBreakpointValue(["sm", "md", "lg"])}
          display={isNavOpen ? "none" : "flex"}
        />
        <IconButton
          colorScheme={colorScheme}
          mr={("1.5", "3")}
          icon={icon === "moon" ? <SunIcon /> : <MoonIcon />}
          size={useBreakpointValue(["sm", "md", "lg"])}
          display={isNavOpen ? "none" : "flex"}
          onClick={() => {
            toggleColorMode();
            clickIcon();
          }}
        />

        <Box display={isNavOpen ? "none" : "flex"}>
          <IconButton
            colorScheme={colorScheme}
            icon={<HamburgerIcon />}
            size={useBreakpointValue(["sm", "md", "lg"])}
            display={["flex", "flex", "flex", "none"]}
            onClick={() => {
              changeDisplay("flex");
              setisNavOpen(true);
            }}
          />
        </Box>
      </Flex>

      <Flex
        display={display}
        direction="column"
        zIndex={20}
        align="center"
        w="100vw"
        h="100vh"
        overflow="hidden"
        position="fixed"
        bg={bgColor}
      >
        <Flex
          direction="row"
          align="center"
          w="100%"
          mb={"7%"}
          p={isNavOpen ? "3% 7%" : "0"}
        >
          <NextLink href="/" passHref size={["s", "md", "lg", "xl"]}>
            <Link>
              <Heading fontSize={["md", "lg", "xl", "2xl"]}>
                Naughty Bits
              </Heading>
            </Link>
          </NextLink>
          <Spacer />
          <Flex>
            <IconButton
              colorScheme={colorScheme}
              mr={("1.5", "3")}
              icon={icon === "moon" ? <SunIcon /> : <MoonIcon />}
              size={useBreakpointValue(["sm", "md", "lg"])}
              display={["flex", "flex", "flex", "none"]}
              onClick={() => {
                toggleColorMode();
                clickIcon();
              }}
            />
            <IconButton
              colorScheme={colorScheme}
              icon={<CloseIcon />}
              size={useBreakpointValue(["sm", "md", "lg"])}
              display={["flex", "flex", "flex", "none"]}
              onClick={() => {
                changeDisplay("none");
                setisNavOpen(false);
              }}
            />
          </Flex>
        </Flex>
        <Nav />
      </Flex>
    </header>
  );
}
