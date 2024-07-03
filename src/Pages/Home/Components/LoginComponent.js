import { Card } from "@mui/material"
import { TextFieldComp } from "../../../Common/TextField"
import ButtonComp from "../../../Common/Button"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginActionBinder } from "../Actions/LoginAction"


const Login = () => {
    const[userId, setUserId] = useState("")
    const[email,setEmail] = useState("")
    const[password, setPassword] =useState("")
    const[isLoggedIn, setIsLoggedIn] = useState(-1)
    
    const dispatch =useDispatch()

    const onEmailChange =(event) => {
        setEmail(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    
    const onLoginChange = () => {
        let userDetails = {
            email : email,
            password : password
        }
        dispatch(loginActionBinder(userDetails))
    }

    const loginData = useSelector((state) => {
        return state.loginData
    })

    useEffect(() => {
        console.log("loginData", loginData)
        if (loginData.isLoggedIn) {
            if (loginData.user && loginData.user.id) {
                setIsLoggedIn(1);
            } else {
                setIsLoggedIn(0);
            }
        }
    })

    return(
        <div>
            <h2>amazon.in</h2>
            <Card>
            <div>UserId</div>
            <TextFieldComp value={userId}  />
            <br></br>
            <div>Email Id</div>
            <TextFieldComp value={email} onTextChange={onEmailChange}/>
            <br></br>
            <div>Password</div>
            <TextFieldComp value={password} onTextChange={onPasswordChange}/>
            <ButtonComp onButtonClick={onLoginChange} buttonName={"Login"} />
            </Card>
        </div>
    )
}
export default Login