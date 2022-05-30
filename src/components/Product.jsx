import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel}  from "@chakra-ui/react";
const Product = ({dat}) => {
  console.log(dat);
  return (
    <Stack data-cy="product">
      {/* <Image data-cy="product-image" src={dat.imageSrc} gwtar/>
      <Text data-cy="product-category">{dat.category} etw </Text>
      <Tag>
        <TagLabel data-cy="product-gender">{dat.gender} ewt </TagLabel>
      </Tag>
      <Heading data-cy="product-title">{dat.title} ewt</Heading>
      <Box data-cy="product-price">{dat.price} ewtt</Box> */}
      <h1>beatgoiuw</h1>
    </Stack>
  );
};

export default Product;
