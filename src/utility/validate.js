export const isValidEmail = (inputText)=>{
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(inputText)) {
    return true
    }else{
        return false
    }
}
export const isPassword = (inputPassword)=>{
    if(inputPassword.length >= 6) return true
    return false
}
