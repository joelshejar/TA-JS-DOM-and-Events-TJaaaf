let form = document.querySelector("form")




form.addEventListener("submit", (event) => {
    event.preventDefault()
    let userNameerr = '';
    let nameErr =''
    let emailErr = ''
    let phoneErr = ''
    let passwordErr = ''
    let userName = event.target.elements.username
    let name = event.target.elements.name
    let email = event.target.elements.Email
    let phone = event.target.elements.phoneNumber
    let password1 = event.target.elements.password1
    let password2 = event.target.elements.password2
    console.log(userName)
    if(userName.value.length < 5){
        userNameerr = `Username can't be less than 4 characters`
    } else{
        userNameerr = ""
    }
    userName.nextElementSibling.innerText = userNameerr
    if(name.value.split('').some(e => Number(e))){
        nameErr = `You can't use number in the name field`
    }else{
        nameErr =''
    }
    name.nextElementSibling.innerText = nameErr
    if(!(email.value.includes('@'))){
        emailErr = `Not a valid email`
    } else if (!(email.value.length > 5)){
        emailErr = `Not a valid email`
    } else {
        emailErr = ''
    }
    email.nextElementSibling.innerText = emailErr
    if(!(password1.value === password2.value)){
        passwordErr = `Enter the same password`
    } else{
        passwordErr = ''
    }
    password2.nextElementSibling.innerText = passwordErr

})






































