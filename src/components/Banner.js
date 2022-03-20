import Image from "next/image";

import NextLink from "next/link";

import {
  useBreakpointValue,
  Box,
  VStack,
  Flex,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

const Banner = () => {
  return (
    <VStack
      zIndex={1}
      height="100%"
      w="100%"
      p="0"
      align={"flex-start"}
      position="relative"
    >
      <Box w="100%" h="100%" opacity={0.9}>
        <Image
          layout="responsive"
          src="/images/banner.jpg"
          alt="Lingerie Model"
          width={2000}
          height={800}
        />
      </Box>
      <Flex
        opacity="0.9"
        top={["5%", "25%"]}
        left={["0%", "5%", "7%", "10%"]}
        direction="column"
        pos={["absolute"]}
        zIndex="10"
        p={["2% 5%", "2% 3%"]}
        borderRadius={["0", "4px"]}
        justify="flex-start"
        color={"gray.50"}
        bg={"gray.900"}
        mt={["-10%"]}
        display={["block"]}
      >
        <Text fontSize={["xs", "s", "md", "lg"]} mb={0.5}>
          Welcome to Naughty Bits!
        </Text>
        <Heading mb={2} fontSize={["md", "lg", "xl", "4xl"]}>
          Home for all your adult needs
        </Heading>

        <NextLink passHref href="/shop">
          <Link>
            <Button
              variant="banner"
              size={useBreakpointValue(["xs", "sm", "md", "xl"])}
            >
              View All Products
            </Button>
          </Link>
        </NextLink>
      </Flex>
    </VStack>
  );
};
export default Banner;
