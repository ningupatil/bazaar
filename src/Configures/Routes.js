import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Components/HomeComponent";
import Cart from "../Pages/Cart/Components/CartPageComponent";
import Products from "../Pages/Products/Components/ProductsComponent";
import MenuAppBar from "../Pages/Home/Components/AppBarComponent";
import Login from "../Pages/Home/Components/LoginComponent";
import { SignUp } from "../Pages/SignUp/Components/SignUpComponent";
import { SignIn } from "../Pages/SignIn/Components/SignInComponent";
import Product from "../Pages/SingleProduct/Components/SingleProductComponent";



const routes = <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MenuAppBar />} />

        <Route
        path="/" element={<Home />} />

        <Route 
        path="/products" element={<Products />}  
        />

        <Route
        path="/cart" element={<Cart />}  />

        <Route path= "/signup" element = {<SignUp />} />

        <Route path= "/login" element = {<Login />} />

        <Route path = "/signin" element = {<SignIn />} />

        <Route path = "/products/:productId"  element ={<Product />} />


        </Routes>
      </BrowserRouter>

export default routes;