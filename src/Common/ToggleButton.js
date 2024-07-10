import { ToggleButton } from "@mui/material";
import { useState } from "react";


const ToggleButtonComponent = () => {
    const[selected, setSelected] = useState(false)
    return(
        <div>
            <ToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                }}
            >
                {/* <CheckIcon /> */}
            </ToggleButton>
        </div>
    )
}

export default ToggleButtonComponent