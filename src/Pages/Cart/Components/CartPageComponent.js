import React, { useState, useEffect } from "react";
import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import NavigationMenuComponent from "../../../Common/NavigationMenuComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartsThunk } from "../Actions/CartAction";
import MenuAppBar from "../../Home/Components/AppBarComponent";
import ButtonComp from "../../../Common/Button";

const Cart = () => {
  const [cart, setCart] = useState({ cartItems: []})
  const dispatch = useDispatch();


 
  useEffect(() => {
    
    dispatch(fetchCartsThunk())
  },[])

  const cartData = useSelector((state) => {
    return state.cartData
  });
  console.log("-----cartData-----", cartData)
  useEffect( () => {
    setCart(cartData.cart)
  },[cartData])

  return (
    <div>
      <MenuAppBar />
      <NavigationMenuComponent />
      <Grid container>

        {cartData.cart.map((cart, index) => {
          return (

            <Grid item xs={4} md={8} key={`cart_details_${index}`} style={{ margin: "10px" }}>
              <Card sx={{ maxWidth: 400 }}>

                <CardMedia
                  component="img"
                  height="500"
                  image={cart.product.images}
                  alt="product"
                />
                <CardContent>
                  <Typography variant="body2" color="darkBlack">product Id : {cart.product.id}</Typography>
                  <Typography variant="body2" color="darkBlack">product Name : {cart.product.title}</Typography>

                  <Typography variant="body2" color="text.secondary">Category : {cart.product.category}</Typography>
                  <br></br>
                  <Typography variant="body2" color="text.primary">Description : {cart.product.description}</Typography>
                  <ButtonComp variant="body3" color="text.secondary">{ }</ButtonComp>
                </CardContent>
              </Card>
            </ Grid>
          )
        })}
        <Grid item md={2}></Grid>
      </Grid>
    </div >
  )
}
export default Cart