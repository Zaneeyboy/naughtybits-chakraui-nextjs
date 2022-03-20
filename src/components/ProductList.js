import { SimpleGrid } from "@chakra-ui/react";
import ShopProduct from "./ShopProduct";

const ProductList = (props) => {
  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={[3, 4]}>
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
      <ShopProduct
        src="/images/toys.jpg"
        alt="toys"
        title="Sex Toys"
        price="$800"
        details="Some details about the product"
      />
    </SimpleGrid>
  );
};

export default ProductList;
