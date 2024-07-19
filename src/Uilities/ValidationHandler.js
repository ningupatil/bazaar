const validator = require('validator');

export const isValidEmail = (email) => {
    return validator.isEmail(email);
}