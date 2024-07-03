

export const signIn  = (userInput, apiResponse) => {
    let isSignInSuccess = true;
    if(apiResponse.email != userInput.email) {
        isSignInSuccess = false;
    }
    if(apiResponse.id != userInput.userId) {
        isSignInSuccess = false;
    }
    return isSignInSuccess
}