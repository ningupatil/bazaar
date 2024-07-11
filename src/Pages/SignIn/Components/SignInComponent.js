import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper } from "@mui/material"
import { TextFieldComp } from "../../../Common/TextField"
import ButtonComp from "../../../Common/Button"
import { useDispatch, useSelector } from "react-redux"
import { signInActionBinder } from "../Actions/SignInAction"
import { Fragment, useContext, useEffect, useState } from "react"
import MenuAppBar from "../../Home/Components/AppBarComponent"
import { UserContext } from "../../../Context/UserContext/UserContext"
import ToggleButtonComponent from "../../../Common/ToggleButton"
import { Link, useNavigate } from "react-router-dom"


export const SignIn = () => {
    const[userId, setUserId] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const {setUserDetails} = useContext(UserContext)
    const[isSignedInSuccess, setIsSignedInSuccess] = useState(-1)
    // const userIsActive = useUserIsActive()
    const navigate = useNavigate()
    const onUserIdChange =(event) => {
        setUserId(event.target.value)
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleClickOpen = () => {
        isSignedInSuccess(true);
      };
    const handleClose = () => {
        isSignedInSuccess(false);
      };

    const dispatch = useDispatch()

    const onSignInClick =() => {
        console.log("---onSignInClick----")
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
    useEffect(() => {
        setUserDetails(signinData.user);
        console.log("--signinData.user---",signinData.user)
        if(signinData.isSignIn) {
            if(signinData.user.email && signinData.user.Id) {
                setIsSignedInSuccess(0)
            }
            else {
                setIsSignedInSuccess(1)
            }
        }

    }, [signinData])
    
    const closeDialogueView = () => {
        setIsSignedInSuccess(-1);
        // window.location = "/"
        navigate("/")
    }    

    const getDialogView = (message) => {
        return <Fragment>
                    <Dialog
                        open={true}
                        onClose={closeDialogueView}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                        
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            {message}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <ButtonComp onButtonClick={closeDialogueView} buttonName={"Ok"} />
                        </DialogActions>
                    </Dialog>
                </Fragment>
    }


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
                <br></br>
            </Paper>

            {(isSignedInSuccess == 1)
                ? getDialogView(`You have successfully signedIn`)
                : (isSignedInSuccess == 0)
                    ? getDialogView(`Something went wrong, please try again later`)
                    : null
            }
               
        </div>
    )
}