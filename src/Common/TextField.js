
import { TextField } from "@mui/material";
import React from "react";

export const TextFieldComp=(props)=>{



    return(
        <div>
            
            <TextField 
                type={(props.textType) ? props.textType : ''}
                error={(props.textError) ? props.textError : ''}
                helperText={(props.textError) ? props.textError : ''}
                id="outlined-error"
                label={(props.textLabel) ? props.textLabel : ''}
                defaultValue={props.defaultValue}
                    onChange={props.onTextChange}
            />
         
        </div>
    )
}

