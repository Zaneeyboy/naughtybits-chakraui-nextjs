import {
  Text,
  Heading,
  Box,
  VStack,
  SimpleGrid,
  Link,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  Icon,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import {
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Contact = () => {
  const color = useColorModeValue("gray.800", "gray.100");
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box p={["3% 5%", "3% 7%", "3% 10%"]} bg={bgColor} color={color}>
      <SimpleGrid columns={[1, 1, 2]} spacingX={5} spacingY={6} m={"5% 0"}>
        <VStack spacing={3} align="flex-start">
          <Heading mb={"2%"} fontSize={["sm", "md", "lg", "xl"]}>
            Get in touch with us
          </Heading>

          <Link href="tel:8682217881">
            <Text fontSize={["xs", "sm", "md", "lg"]}>
              <Icon
                as={AiOutlinePhone}
                sx={{ marginRight: ["0.5rem", "1rem"] }}
                aria-label="Call NaughtyBits"
              />
              1 (868) 221-7881
            </Text>
          </Link>
          <Link href="https://wa.me/8683475755">
            <Text fontSize={["xs", "sm", "md", "lg"]}>
              <Icon
                as={AiOutlineWhatsApp}
                sx={{ marginRight: ["0.5rem", "1rem"] }}
                aria-label="Message Naughty Bits on Whatsapp"
              />
              1 (868) 347-5755
            </Text>
          </Link>
        </VStack>
        <VStack spacing={3} align="flex-start">
          <Heading mb={"2%"} fontSize={["sm", "md", "lg", "xl"]}>
            Find us online!
          </Heading>
          <Link
            href="https://www.facebook.com/Naughty-Bits-Lingerie-Store-1208646862629639/"
            isExternal
          >
            <Text fontSize={["xs", "sm", "md", "lg"]}>
              <Icon
                as={FaFacebookF}
                sx={{ marginRight: ["0.5rem", "1rem"] }}
                aria-label="Find us on Facebook"
              />
              Naughty Bits
            </Text>
          </Link>
          <Link href="https://www.instagram.com/naughty_bits_tt/" isExternal>
            <Text fontSize={["xs", "sm", "md", "lg"]}>
              <Icon
                as={FaInstagram}
                sx={{ marginRight: ["0.5rem", "1rem"] }}
                aria-label="Find us on Instagram"
              />
              naughty_bits_tt
            </Text>
          </Link>
          <Link href="https://www.tiktok.com/@naughty_bits_tt" isExternal>
            <Text fontSize={["xs", "sm", "md", "lg"]}>
              <Icon
                as={FaTiktok}
                sx={{ marginRight: ["0.5rem", "1rem"] }}
                aria-label="Find us on TikTok"
              />
              @naughty_bits_tt
            </Text>
          </Link>
          <Link
            href="https://www.google.com/maps/place/Naughty+Bits+Lingerie+Store/@10.5474822,-61.4174574,17z/data=!3m1!4b1!4m5!3m4!1s0x8c35f97f8cfe2727:0x31f684e4174ee7be!8m2!3d10.547482!4d-61.4152239"
            isExternal
          >
            <Text fontSize={["xs", "sm", "md", "lg"]}>
              <Icon
                as={FaMapMarkerAlt}
                sx={{ marginRight: ["0.5rem", "1rem"] }}
                aria-label="See our store location on Google Maps"
              />
              #164 Caroni Savannah Road, Charlieville
            </Text>
          </Link>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Contact;
