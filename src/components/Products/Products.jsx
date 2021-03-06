import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Running shoes",
//     price: "₹500",
//     image:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*",
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     description: "Apple macbook pro",
//     price: "₹90000",
//     image:
//       "https://www.bhphotovideo.com/images/images2500x2500/apple_z0x1_mvfh_05_bh_13_3_macbook_air_with_1492907.jpg",
//   },
// ];


const Products = ( { products, onAddToCart } ) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
      {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}  onAddToCart={onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
