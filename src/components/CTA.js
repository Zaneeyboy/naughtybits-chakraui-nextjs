import {
  Box,
  VStack,
  Link,
  Text,
  useColorModeValue,
  Heading,
  LightMode,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

const CTA = () => {
  const color = useColorModeValue("gray.800", "gray.100");
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <LightMode>
      <VStack
        mt={"-0.8%"}
        color={color}
        align={"start"}
        bg={bgColor}
        p={["3% 5%", "3% 7%", "3% 10%"]}
      >
        <Heading fontSize={["lg", "xl", "2xl", "4xl"]}>
          Explore your pleasure!
        </Heading>
        <Text fontSize={["xs", "sm", "md", "lg"]} w={["100%", "90%", "80%"]}>
          Make your dream fantasies a reality with our wide range of products
        </Text>
        <Box as="button">
          <NextLink href="/shop" passHref>
            <Link fontSize={["sm", "md", "lg"]}>
              <Button
                variant={"primary"}
                size={useBreakpointValue(["sm", "md", "lg"])}
              >
                View All Products
              </Button>
            </Link>
          </NextLink>
        </Box>
      </VStack>
    </LightMode>
  );
};

export default CTA;
