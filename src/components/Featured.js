import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import FeaturedProduct from "./FeaturedProduct";

const Featured = () => {
  return (
    <Box m={"5% 0"} p={["3% 5%", "3% 7%", "3% 10%"]}>
      <SimpleGrid columns={[1, 2, 2, 4]} spacingX={3} spacingY={3}>
        <FeaturedProduct
          src="/images/toys.jpg"
          alt="toys"
          title="Sex Toys"
          price="$800"
          details="Some details about the product"
        />
        <FeaturedProduct
          src="/images/toys.jpg"
          alt="toys"
          title="Sex Toys"
          price="$800"
          details="Some details about the product"
        />
        <FeaturedProduct
          src="/images/toys.jpg"
          alt="toys"
          title="Sex Toys"
          price="$800"
          details="Some details about the product"
        />
        <FeaturedProduct
          src="/images/toys.jpg"
          alt="toys"
          title="Sex Toys"
          price="$800"
          details="Some details about the product"
        />
      </SimpleGrid>
    </Box>
  );
};
export default Featured;
