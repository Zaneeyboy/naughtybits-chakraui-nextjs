import { Link, Box, SimpleGrid } from "@chakra-ui/react";
import ProductList from "../src/components/ProductList";
const Shop = (props) => {
  return (
    <Box m={"5% 0"} p={["3% 5%", "3% 7%", "3% 10%"]}>
      <ProductList />
    </Box>
  );
};

export default Shop;
