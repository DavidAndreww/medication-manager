
export const formValidation = (pass1, pass2, email) => {
  if(!validatePassword(pass1, pass2) || !validateEmail(email)) {
    return false
  }
  return true
}

const validatePassword = (pass1, pass2) => {
  console.log('Password match:', pass1 === pass2)
  return pass1 === pass2 ? true : false
}

const validateEmail = (inputString) => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(inputString.match(emailFormat)) {
    console.log("Valid email address!");
    return true;
  } else {
    console.log("You have entered an invalid email address!");
    return false;
  }
}