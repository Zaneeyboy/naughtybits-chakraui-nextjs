import {
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";

import { Nav } from "./Navbar";
import Icons from "../components/Icons";

const Footer = () => {
  return (
    <footer>
      <VStack align="start" mt={"5%"} p={["3% 5%", "3% 7%", "3% 10%"]}>
        <SimpleGrid columns={[1, 2, 2, 2]} spacingX={5} spacingY={5} mb={"5%"}>
          <VStack align="start">
            <Heading size={["sm", "sm", "md", "md"]}>Navigation</Heading>
            <Nav />
          </VStack>
          <VStack align="start" spacing={1}>
            <Heading size={["sm", "sm", "md", "md"]}>
              Business Information
            </Heading>
            <Text fontSize={["sm", "sm", "md", "md"]}>
              #164 Caroni Savannah Road, Charlieville
            </Text>
            <Text fontSize={["sm", "sm", "md", "md"]}>
              Opening hours: Monday-Saturday 9am-4pm
            </Text>
          </VStack>
        </SimpleGrid>

        <Box w="100%">
          <Icons />
        </Box>

        <Stack
          direction={["column", "row"]}
          justify={"space-between"}
          alignItems={["flex-start"]}
          w="100%"
          spacing={0}
          mt={"5%"}
          p={"5% 0"}
        >
          <Text mb={[2, 0]} fontSize={["xs", "xs", "sm", "md"]}>
            ©2022 Naughty Bits
          </Text>
          <Text fontSize={["xs", "xs", "sm", "md"]}>
            Developed By Zane Mohammed
          </Text>
        </Stack>
      </VStack>
    </footer>
  );
};

export default Footer;
