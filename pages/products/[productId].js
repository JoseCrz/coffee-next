// This is a dynamic page 🍃

import React from "react";
import { useRouter } from "next/router";

const Product = () => {
  // Example:
  // const router = useRouter();
  // return <p>This is the page for product: {router.query.productId}</p>;

  const {
    query: { productId },
  } = useRouter();

  return <p>This is the page for product number: {productId}</p>;
};

export default Product;
