import { Button } from "@mui/material";
import React from "react";

const ButtonComp=(props)=>{



    return(
        <div style={{ margin: '5px' }}>
          <Button variant="contained" onClick={props.onButtonClick}>{props.buttonName}</Button>
        </div>
    )
}

export default ButtonComp
