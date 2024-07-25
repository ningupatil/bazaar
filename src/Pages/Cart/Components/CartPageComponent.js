import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import NavigationMenuComponent from "../../../Common/NavigationMenuComponent";
import { useDispatch, useSelector } from "react-redux";
import { cartActionBinder, fetchCartsThunk } from "../Actions/CartAction";
import MenuAppBar from "../../Home/Components/AppBarComponent";

const Cart = () => {
  const [cart, setCart] = useState({ cartItems: []})
  const dispatch = useDispatch();


  useEffect(() => {
     console.log("---in useEffect--- ")
    dispatch(fetchCartsThunk())

  }, []);

  const cartData = useSelector((state) => {
    return state.cartData
  });
  console.log("-----cartData-----", cartData)
  // useEffect( () => {
  //   setCart(cartData.cart)
  // },[cartData])

  return (
    <div>
      <MenuAppBar />
       <NavigationMenuComponent />
      <Grid container>

        {/* {cartData.cartItems.map((cartItem,index) => { */}
        {cartData.carts.carts.map((cart,index) =>{
          console.log("---grid container---",cart)
          return (
            <Grid item xs={4} key={`cartItem_details_${index}`} style={{ margin: "10px" }}>
              <Card>
                <div>
                  <label>{cart.id}</label>
                  </div>
                <div>
                  <label id={`title_${index}`}>{cart.title}</label>
                </div>
                <div>
                  {/* <img src={cart.products.thumbnail} style={{ width: "100px", height: "100px" }} /> */}
                </div>
                <div>
                  <label>{cart.price}</label>
                </div>
                <div>
                  <label>{cart.quantity}</label>
                  </div>
                <div>
                  <label>Price={cart.total} rs</label>
                </div>
                <div>
                  <label>{cart.discountPercentage}</label>
                </div>
                <div>
                  <label>Final Price={cart.discountedTotal} rs</label>
                </div>
              
              </Card>
            </Grid>
          )
        })}

      </Grid>
    </div>
  )
}
export default Cart