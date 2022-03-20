import { Link, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { PhoneIcon } from "@chakra-ui/icons";

const Icons = () => {
  return (
    <>
      <HStack spacing={1} justify="flex-start">
        <Link
          href="https://www.facebook.com/Naughty-Bits-Lingerie-Store-1208646862629639/"
          isExternal
        >
          <IconButton
            size={useBreakpointValue(["sm", "md", "lg"])}
            colorScheme="purple"
            icon={<FaFacebookF />}
            aria-label="Find us on Facebook"
          />
        </Link>
        <Link href="https://www.instagram.com/naughty_bits_tt/" isExternal>
          <IconButton
            size={useBreakpointValue(["sm", "md", "lg"])}
            colorScheme="purple"
            icon={<FaInstagram />}
            aria-label="Find us on Instagram"
          />
        </Link>
        <Link href="https://www.tiktok.com/@naughty_bits_tt" isExternal>
          <IconButton
            size={useBreakpointValue(["sm", "md", "lg"])}
            colorScheme="purple"
            icon={<FaTiktok />}
            aria-label="Find us on TikTok"
          />
        </Link>
        <Link
          href="https://www.google.com/maps/place/Naughty+Bits+Lingerie+Store/@10.5474822,-61.4174574,17z/data=!3m1!4b1!4m5!3m4!1s0x8c35f97f8cfe2727:0x31f684e4174ee7be!8m2!3d10.547482!4d-61.4152239"
          isExternal
        >
          <IconButton
            size={useBreakpointValue(["sm", "md", "lg"])}
            colorScheme="purple"
            aria-label="See our store location on Google Maps"
            icon={<FaMapMarkerAlt />}
          />
        </Link>
        <Link href="https://wa.me/8683475755">
          <IconButton
            size={useBreakpointValue(["sm", "md", "lg"])}
            colorScheme="purple"
            aria-label="Message Naughty Bits on Whatsapp"
            icon={<FaWhatsapp />}
          />
        </Link>
        <Link href="tel:8682217881">
          <IconButton
            size={useBreakpointValue(["sm", "md", "lg"])}
            colorScheme="purple"
            aria-label="Call NaughtyBits"
            icon={<PhoneIcon />}
          />
        </Link>
      </HStack>
    </>
  );
};

export default Icons;
