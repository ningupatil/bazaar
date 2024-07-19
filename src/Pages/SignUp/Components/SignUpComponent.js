import { Alert, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper } from "@mui/material"
import {  signUpActionBinder } from "../Actions/SignupAction"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState, Fragment } from "react"

import { CheckCircleOutline } from "@mui/icons-material"
import { saveObjectInLocalStorage } from '../../../Uilities/LocalStorageHandler';
import ButtonComp from "../../../Common/Button"
import { SignUpPaperComponent } from "./SignupPaperComponent"
import MenuAppBar from "../../Home/Components/AppBarComponent"

export const SignUp = (props) => {
    const[name,setName] = useState('')
    
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('');
    const[gender,setGender] = useState('');
    const[status,setStatus] = useState('active')
    const [isSignupSuccess, setIsSignupSuccess] = useState(-1);
    const[open, setOpen] = useState('')

    const dispatch = useDispatch()

    const onNameChange = (event) => {
        setName(event.target.value);
        // console.log('--- event.target.value ', event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
        // console.log('--- event.target.value ', event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
        // console.log('--- event.target.value ', event.target.value);
    }
    const onGenderChange = (event) => {
        setGender(event.target.value);
        console.log('--- event.target.value ', event.target.value);
    }
    const onStatusChange = (event) => {
        setStatus(event.target.value);
        console.log('--- event.target.value ', event.target.value);
    }
    const handleClickOpen = () => {
        setIsSignupSuccess(true);
      };
    const handleClose = () => {
        setIsSignupSuccess(false);
      };


    const onSignInClick = () => {
        window.location ="/signin"
    }

    const onSignUpClick = () => {
        let userDetails = {
            name: name,
            email: email,
            gender: gender,
            status: 'active',
            password: password
        }        
        console.log("onSignUpClick", userDetails)
        //call Action
        dispatch(signUpActionBinder(userDetails))
    }

    const signUpData = useSelector((state) => {
        return state.signUpData
       })
       console.log("signupData", signUpData)

    useEffect(() => {
        if (signUpData.isSignedup) {
            if (signUpData.user && signUpData.user.id) {
                setIsSignupSuccess(1);
            } else {
                setIsSignupSuccess(0);
            }
        }
        
    }, [signUpData])
    const closeDialogueView = () => {
        setIsSignupSuccess(-1);
        
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
            <Grid
             container
             direction="row"
             justifyContent="flex-start"
             alignItems="center">
                <Grid item md={3}>

                </Grid>
                
                <Grid item md={6}>
                    <SignUpPaperComponent
                        name={name}
                        email={email}
                        password={password}
                        gender={gender}
                        status={status}

                        onFirstNameChange={onNameChange}
                        onEmailChange={onEmailChange}
                        onPasswordChange={onPasswordChange}
                        onStatusChange={onStatusChange}
                        onGenderChange={onGenderChange}
                        onSignUpClick={onSignUpClick}
                        onSignInClick={onSignInClick}
                    />

                    {(isSignupSuccess == 1)
                        ? getDialogView(`You have successfully signedup, kindly save user id for further refernece User Id : ${signUpData.user.id}`)
                        : (isSignupSuccess == 0)
                            ? getDialogView(`Something went wrong, please try again later`)
                            : null
                    }
                </Grid>
            </Grid>
            
        </div>
    )
}