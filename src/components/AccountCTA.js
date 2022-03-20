import { Box, VStack, HStack, Heading, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const AccountCTA = () => {
  const color = useColorModeValue("gray.800", "gray.100");
  const bgColor = useColorModeValue("gray.100", "gray.900");
  return (
    <HStack color={color} bg={bgColor}>
      <Box>
        <Image
          src="/images/underwear.jpg"
          alt="Lingerie Model"
          width={400}
          height={450}
          layout="intrinsic"
        />
      </Box>
      <VStack p={["3% 3%", "3% 5%", "3% 7%", "3% 10%"]} align="flex-start">
        <Heading fontSize={["xs", "sm", "lg", "xl"]}>
          Create your account today and start shopping with us online!
        </Heading>
        <VStack spacing={0.5} align="flex-start">
          <Box as="button">
            <Text fontSize={["sm", "md", "lg", "xl"]}>Create account</Text>
          </Box>
          <Text fontSize={["xs", "sm", "md", "md"]}>Or</Text>
          <Box as="button">
            <Text fontSize={["sm", "md", "lg", "xl"]}>Login</Text>
          </Box>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default AccountCTA;
