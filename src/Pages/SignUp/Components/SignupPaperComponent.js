import { Paper } from "@mui/material"
import { TextFieldComp } from "../../../Common/TextField"
import ButtonComp from "../../../Common/Button"
import MenuAppBar from "../../Home/Components/AppBarComponent"


export const SignUpPaperComponent = (props) => {
    return(
        <div>
            
            <h3>Create Account</h3>         
            
            <TextFieldComp textLabel= {"Name"} value={props.name} onTextChange={props.onFirstNameChange}/>
            <br></br>
            
            <TextFieldComp textLabel= {"Email ID"} onTextChange={props.onEmailChange} />
            <br></br>
            
            <TextFieldComp textLabel= {"Gender"} onTextChange={props.onGenderChange} />
            <br></br>
            
            <TextFieldComp textLabel= {"Password"} onTextChange={props.onPasswordChange} />
            <br></br>
            <ButtonComp color="inherit" onButtonClick={props.onSignUpClick} buttonName={"SignUp"}  />
            <br></br>
            <label>If you already have account</label>
            <ButtonComp color="inherit" onButtonClick={props.onSignInClick} buttonName={"SignIn"}  />
            
            </div>  
    )
}