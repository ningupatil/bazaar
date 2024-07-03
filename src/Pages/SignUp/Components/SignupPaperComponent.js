import { Paper } from "@mui/material"
import { TextFieldComp } from "../../../Common/TextField"
import ButtonComp from "../../../Common/Button"
import MenuAppBar from "../../Home/Components/AppBarComponent"


export const SignUpPaperComponent = (props) => {
    return(
        <Paper>
            
            <h3>Create Account</h3>         
            <div>Name</div>
            <TextFieldComp defaultValue="Name" value={props.name} onTextChange={props.onFirstNameChange}/>
            <br></br>
            <div>Email</div>
            <TextFieldComp onTextChange={props.onEmailChange} />
            <br></br>
            <div>Gender</div>
            <TextFieldComp onTextChange={props.onGenderChange} />
            <br></br>
            {/* <div>Status</div>
            <TextFieldComp onTextChange={props.onStatusChange} /> */}
            <br></br>
            <div>Password</div>
            <TextFieldComp onTextChange={props.onPasswordChange} />
            <br></br>
            <ButtonComp color="inherit" onButtonClick={props.onSignUpClick} buttonName={"SignUp"}  />
            <br></br>
            <label>If you already have account</label>
            <ButtonComp color="inherit" onButtonClick={props.onSignInClick} buttonName={"SignIn"}  />
            
            </Paper>
    )
}