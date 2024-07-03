import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Link, useParams, useSearchParams } from 'react-router-dom';


import ProductCardComp from "./ProductCardComponent";
import NavigationMenuComponent from "../../../Common/NavigationMenuComponent";
import { useDispatch, useSelector } from "react-redux";
import { productActionBinder } from "../Actions/ProductAction";
import MenuAppBar from "../../Home/Components/AppBarComponent";
const Products= () => {
  const [products, setProducts] = useState([])
    const dispatch = useDispatch();

    // const params = useParams();
    const [params] = useSearchParams();
  useEffect(()=>{
    dispatch(productActionBinder(params.get('category')))
  },[])

  const productData = useSelector((state) => {
    // console.log("---in  useSelector callback--- ", state)
    return state.productData
  })

  useEffect(() => {
    setProducts(productData.products)
  })
  // // useEffect(() => {
  // //   setProucts({
  // //     ...products, Product: {
  // //       ...productDetails.Product, 
  // //       Price: 400000
  //     }
  //   })
  // }, [])

  return (
    <div>
      <MenuAppBar />
      <NavigationMenuComponent />
      <Grid container >
        <Grid item xs={2} md={2} lg={2}>

        </Grid>
        <Grid item xs={10} md={8} lg={8}>
          <Grid container >
           {productData.Products.map((Product, index) => {
             return (<Grid item xs={4}  key={`product_details_${index}`} style={{ margin: "10px"}}>
              <ProductCardComp
                product={Product}
              />
            </Grid>)
           })}
           </Grid>
        </Grid>
        <Grid item xs={2} md={2} lg={2}>

        </Grid>
      </Grid>
      
    </div>
  )
}

export default Products