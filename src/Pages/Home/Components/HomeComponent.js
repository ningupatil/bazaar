import { CardActionArea, Grid } from "@mui/material";
import React, { useState,useEffect } from "react";

import Card from '@mui/material/Card';
import NavigationMenuComponent from "../../../Common/NavigationMenuComponent";
import { useDispatch, useSelector } from "react-redux";
import { homeActionBinder } from "../Actions/HomeAction";
import MenuAppBar from "./AppBarComponent";



function Home() {
    const[promotedProducts,setPromotedProducts]=useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        // console.log("---in useEffect--- ")
        dispatch(homeActionBinder())
        
        // setPromotedProducts()
    },[])
    const homeData = useSelector((state) => {
        return state.homeData
    });

    useEffect(() => {
        setPromotedProducts(homeData.promotedProducts)
    })

    // console.log("---in rednder--- ", homeData)

    const onPromotedProductClickChange = (category) => {
        window.location = `/products/?category=${category}`
    }

    return(
        <div>
            <MenuAppBar />
            
            <NavigationMenuComponent />

            <h1>Bazaar.com</h1>
            <Grid container>
                <Grid item md={2}>

                </Grid>
                
                {promotedProducts.map((promotedProduct,index1)=>{
                    return(
                        <Grid item xs={4} md={4} key={`promotedProduct_details_${index1}`} style={{ margin: "10px"}}>
                           <Card sx = {{maxwidth:"500"}}>
                            
                                <Grid container>
                                    {promotedProduct.offerProducts.map((offerProduct,index2)=>{
                                        return(
                                            <Grid item xs={4} md={4} key={`offerproduct_details_${index2}`} style={{ margin: "10px"}}>
                                                <CardActionArea onClick={() => {
                                                    onPromotedProductClickChange(offerProduct.category)
                                                }} >
                                                <div>
                                                  <img src={(offerProduct.images && offerProduct.images.length > 0)
                                                    ? offerProduct.images[0]
                                                    : ''} style={{ width: "100px", height: "100px"}}/>

                                                </div>
                                                <div>
                                                  <label>{`Discount ${offerProduct.discountPercentage} %`}</label>
                                                </div>
                                                </CardActionArea>
                                            </Grid>    
                                        )
                                    })}
                                </Grid>
                                
                            </Card>
                        </Grid>    
                    )
                })}
            </Grid>
        </div>
    )
}
export default Home;