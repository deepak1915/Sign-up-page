const signup = document.querySelector(".signup");
const termCond = document.querySelector("#accept");
const password = document.querySelector("#password");
const email = document.getElementById("email");


signup.addEventListener("click", function(){
    console.log(email.value);
    const validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(!validRegex.test(email.value)){
        alert("Invalid Email!");
    } else if(email.value == ""){
        alert("Please enter the email address.");
    } 

    if(password.value ==""){
        alert("Please enter the password!");
    } else if(password.value.length < 8) {
        alert("Password is too small!");
    } else if(password.value.length > 15) {
        alert("Password is too long!") ;
    }   

});

    termCond.addEventListener('change', () => {
        if (termCond.checked === true) {
                signup.disabled = false;
        } else if (termCond.checked === false) {
                signup.disabled = true;
        }
    })
    