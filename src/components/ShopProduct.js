import {
  Text,
  Heading,
  Box,
  VStack,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";

const ShopProduct = (props) => {
  const color = useColorModeValue("gray.800", "gray.200");
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const hoverBgColor = useColorModeValue("gray.200", "gray.700");
  const badgeColor = useColorModeValue("blackAlpha", "purple");
  return (
    <Box w="100%" h="100%" _hover={{ cursor: "pointer" }}>
      <Box w="100%">
        <Image
          src={props.src}
          alt={props.alt}
          width={300}
          height={300}
          layout={"responsive"}
        />
      </Box>
      <VStack
        _hover={{ background: hoverBgColor }}
        align="flex-start"
        p={"0.5rem 0.75rem"}
        bg={bgColor}
        color={color}
        borderRadius={"0 0 4px 4px"}
        spacing={1}
      >
        <Text fontWeight="600" fontSize={["sm", "md", "lg", "xl"]}>
          {props.title}
        </Text>

        {/* Details about a product like the sizes, colors
        , what comes with the procudt etc */}
        <Text fontSize={["xs", "sm", "md", "lg"]}>{props.details}</Text>

        <Badge colorScheme={badgeColor} alignSelf="flex-end">
          <Text fontSize={["xs", "sm", "md", "lg"]}>{props.price}</Text>
        </Badge>
      </VStack>
    </Box>
  );
};

export default ShopProduct;
