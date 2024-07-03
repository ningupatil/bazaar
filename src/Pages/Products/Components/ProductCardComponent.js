import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Typography } from "@mui/material";
import ButtonComp from "../../../Common/Button";
import MenuAppBar from "../../Home/Components/AppBarComponent";


const ProductCardComp = (props) => {
const onProductClickChange = () => {
    window.location = `/products/${props.product.id}`
}

  return (
    <div>
      
      <Card>
        <CardActionArea onClick = {onProductClickChange}> 
        <CardMedia
          component="img"
          height="190"
          image={props.product.images}
          alt="product"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {props.product.title}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </div>

  )
}
export default ProductCardComp