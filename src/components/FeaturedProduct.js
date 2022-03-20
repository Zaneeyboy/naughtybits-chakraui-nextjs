import Image from "next/image";
import { Box, VStack, Text, useColorMode } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

const FeaturedProduct = (props) => {
  const color = useColorModeValue("gray.800", "gray.200");
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const badgeColor = useColorModeValue("blackAlpha", "purple");
  return (
    <Box w="100%" height="100%">
      <Box w="100%">
        <Image
          src={props.src}
          alt={props.alt}
          width={300}
          height={300}
          layout="responsive"
        />
      </Box>
      <VStack
        align="flex-start"
        p={"0.5rem 0.75rem"}
        bg={bgColor}
        color={color}
        borderRadius={"0 0 4px 4px"}
        spacing={2}
      >
        <Text fontWeight="600" fontSize={["md", "md", "lg", "xl"]}>
          {props.title}
        </Text>

        {/* Details about a product like the sizes, colors
        , what comes with the procudt etc */}
        <Text fontSize={["sm", "md", "lg", "xl"]}>{props.details}</Text>

        <Badge colorScheme={badgeColor} alignSelf="flex-end">
          <Text fontSize={["sm", "md", "lg", "xl"]}>{props.price}</Text>
        </Badge>
      </VStack>
    </Box>
  );
};
export default FeaturedProduct;
