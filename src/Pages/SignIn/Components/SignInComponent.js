import { Grid, Paper } from "@mui/material"
import { TextFieldComp } from "../../../Common/TextField"
import ButtonComp from "../../../Common/Button"
import { useDispatch, useSelector } from "react-redux"
import { signInActionBinder } from "../Actions/SignInAction"
import { useState } from "react"
import MenuAppBar from "../../Home/Components/AppBarComponent"
import { userContext } from "../../../Configures/context"


export const SignIn = () => {
    const[userId, setUserId] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const onUserIdChange =(event) => {
        setUserId(event.target.value)
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const dispatch = useDispatch()
    
    // const {setUserDetails} = userContext(userContext)
    // console.log("---setUserDetails---",setUserDetails)

    const onSignInClick =() => {
        let userDetails = {
            userId : userId,
            email : email,
            password : password
        }

      
        dispatch(signInActionBinder(userDetails))
    }

    const signinData = useSelector((state) => {
         return state.signinData
    })
    console.log("--signinData---",signinData)


    return(
        <div>
            <MenuAppBar />
            <h2>amazon.in</h2>    
            <Paper>
                <div>User Id</div>
                <TextFieldComp  onTextChange={onUserIdChange}/>
                <br></br>
                <div>Email</div>
                <TextFieldComp onTextChange={onEmailChange} />
                <br></br>
                <div>Password</div>
                <TextFieldComp onTextChange={onPasswordChange} />
                <br></br>
                <ButtonComp color="inherit" onButtonClick={onSignInClick} buttonName={"SignIn"}  />
            </Paper>
               
        </div>
    )
}