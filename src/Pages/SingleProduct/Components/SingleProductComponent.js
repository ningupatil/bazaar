import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { fetchSingleProductThunk, singleProductActionBinder } from "../Action/SingleProductAction"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ButtonComp from "../../../Common/Button"
import MenuAppBar from "../../Home/Components/AppBarComponent"
import { saveObjectInLocalStorage } from "../../../Uilities/LocalStorageHandler"



const Product = (props) => {
    const[product, setProduct] = useState()
    const params = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSingleProductThunk({productId : params.productId}))
    },[])



    const singleProductData = useSelector((state) => {
        return state.singleProductData
    })
    console.log("---singleProductData---",singleProductData)

    const onAddCart = () => {
        saveObjectInLocalStorage(singleProductData)
        navigate("/cart") 
    }

    return(
        <div>
            <MenuAppBar />
            <br></br>
            <br></br>
            <Grid container>
                <Grid item md={2}>

                </Grid>
                <Grid item md={8} >
               <Card >
               <CardMedia
                component="img"
                height="500"
                width="500"
                image={singleProductData.product.images}
                alt="product"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                {singleProductData.product.title}
                </Typography>
                <ButtonComp onButtonClick={onAddCart} buttonName={"Add to cart"} />
                </CardContent>
        
            </Card>
            </Grid>
            <Grid item md={2} >

            </Grid>
            </Grid>
            </div>
    )
}

export default Product