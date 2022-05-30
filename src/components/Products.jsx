import React from "react";
import {Flex,Grid, useStyleConfig}  from "@chakra-ui/react";
import AddProduct from "./AddProduct"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import Product from "./Product";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

const [data1,setDta1] = useState([]);
const [per,setPer] = useState();

 useEffect(()=>{
   const data = async ()=>{
    const res = await axios("http://localhost:8080/products");
    setDta1([...data1,res.data])
    // setPer(res.data[0].id)
   }
   data()
 },[])
console.log(data1);
  return (
    <Flex>
      {/* <AddProduct/> */}

      <Grid>
       {/* {data1.map((dat0)=>( */}
         <Product/>
      {/* //  ))} */}
        </Grid>


      {/* Pagination */}

    </Flex>
  
  );
};

export default Products;
