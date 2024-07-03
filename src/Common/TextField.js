
import { TextField } from "@mui/material";
import React from "react";

export const TextFieldComp=(props)=>{



    return(
        <div>
            
            <TextField 
           error
           id="outlined-error"
           label="Error"
           defaultValue={props.defaultValue}
            onChange={props.onTextChange}
            />
         
        </div>
    )
}

