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
import { isValidEmail } from "../../../Uilities/ValidationHandler"


export const SignIn = () => {
    const[userId, setUserId] = useState()
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const {setUserDetails} = useContext(UserContext)
    const[isSignedInSuccess, setIsSignedInSuccess] = useState(-1);

    const [userIdError, setUserIdError] = useState("");
    const [emailIdError, setEmailIdError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    // const userIsActive = useUserIsActive()
    const navigate = useNavigate()

    const validateInput = () => {
        let validation = {
            isUserIdValid: true,
            isEmailValid: true,
            isPasswordValid: true,
        };
        let isValid = true;
        
        if(!userId || userId == 0) {
            console.log('--- user id ', userId);
            isValid = false;
            validation.isUserIdValid = false;
        }
        
        if(!isValidEmail(email)) {
            console.log('---email error --')
            isValid = false;
            validation.isEmailValid = false;
        }

        if(!password || password.length == 0) {
            isValid = false;
            validation.isPasswordValid = false;
        }

        validation.isValid = isValid;
        return validation;
    }

    const onUserIdChange =(event) => {
        setUserId(event.target.value)
        setUserIdError("");
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value)
        setEmailIdError("");
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
        setPasswordError("");
    }

    const handleClickOpen = () => {
        isSignedInSuccess(true);
      };
    const handleClose = () => {
        isSignedInSuccess(false);
      };

    const dispatch = useDispatch()

    const onSignInClick =() => {
        const validationResult = validateInput();
        if(validationResult.isValid) {
            let userDetails = {
                userId : userId,
                email : email,
                password : password
            }
    
          
            dispatch(signInActionBinder(userDetails))
        } else {
            if (!validationResult.isUserIdValid) {
                setUserIdError("User Id is mandatory field")
            }
            
            if (!validationResult.isEmailValid) {
                setEmailIdError("Email id is mandatory field")
            }
            if (!validationResult.isPasswordValid) {
                setPasswordError("Password is mandatory field")
            }
        }
        
    }

    const signinData = useSelector((state) => {
         return state.signinData
    })
    useEffect(() => {
        setUserDetails(signinData.user);
        if(signinData.isSignIn) {
            if(signinData.user.email && signinData.user.id) {
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
            {/* <Paper> */}
                <TextFieldComp 
                    textType={"number"}
                    textLabel={"User Id"}
                    onTextChange={onUserIdChange}
                    textError={userIdError}
                    
                />
                <br></br>
                <TextFieldComp
                    textLabel={"Email Id"}
                    onTextChange={onEmailChange}
                    textError={emailIdError}
                />
                <br></br>
                <TextFieldComp
                    textLabel={"Password"}
                    onTextChange={onPasswordChange}
                    textError={passwordError}
                />
                <br></br>
                <ButtonComp color="inherit" onButtonClick={onSignInClick} buttonName={"SignIn"}  />
                <br></br>
            {/* </Paper> */}

            {(isSignedInSuccess == 1)
                ? getDialogView(`You have successfully signedIn`)
                : (isSignedInSuccess == 0)
                    ? getDialogView(`Something went wrong, please try again later`)
                    : null
            }
               
        </div>
    )
}