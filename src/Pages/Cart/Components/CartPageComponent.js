import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import NavigationMenuComponent from "../../../Common/NavigationMenuComponent";
import { useDispatch, useSelector } from "react-redux";
import { cartActionBinder, fetchCartsThunk } from "../Actions/CartAction";
import MenuAppBar from "../../Home/Components/AppBarComponent";
import { getFromLocalStorage, getObjectFromLocalStorage } from "../../../Uilities/LocalStorageHandler";

const Cart = () => {
  const [cart, setCart] = useState({ cartItems: []})
  const dispatch = useDispatch();


 
  useEffect(() => {
    // const cart = JSON.parse(localStorage.getItem('object'))
    // if(cart) {
    //   setCart(cart)
    // }
    // console.log("cart", cart)
    dispatch(fetchCartsThunk())
  },[])

//   useEffect(() => {
//     console.log("---in useEffect--- ")
   

//  }, []);


  const cartData = useSelector((state) => {
    return state.cartData.cart
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
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={4} md ={8}>
        <Card sx = {{ maxWidth : 600 }}>
          <CardMedia
            component="img"
            height="500"
            image={cartData.images}
            alt="product"
          />
          <CardContent>
            <Typography variant="body2" color="darkBlack">product Name : {cartData.title}</Typography>
            <br></br>
            <Typography variant="body2" color="text.secondary">Category : {cartData.category}</Typography>
            <br></br>
            <Typography variant="body2" color="text.primary">Description : {cartData.description}</Typography>
          </CardContent>
        </Card>
        </Grid>
        <Grid item md={2}></Grid>
       </Grid>
      {/* <Grid container>

       
        {cartData.carts.map((cart,index) =>{
          console.log("---grid container---",cart)
          return (
            <Grid item xs={4} key={`cartItem_details_${index}`} style={{ margin: "10px" }}>
              <Card>
                <div>
                  <Grid container>
                    {cart.products.map((product, index1) => {
                      return(
                        <Grid item xs={4} key={`product_details_${index1}`} style ={{ margin : "10px"}}>
                          <Card>
                            <CardMedia
                            component="img"
                            height="190"
                            image={product.thumbnail}
                            alt="product"
                            />
                            <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                {product.title}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>  
                      )
                    })}
                  </Grid>
                </div>
              
              </Card>
            </Grid>
          )
        })}
      </Grid> */}
    </div>
  )
}
export default Cart