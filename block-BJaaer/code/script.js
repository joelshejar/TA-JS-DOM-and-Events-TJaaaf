let form = document.querySelector("form")
let userInfo = {}


let modal = document.createElement("div")
let h1 = document.createElement("h1")
let email = document.createElement("div")
let gender = document.createElement("div")
let color = document.createElement("div")
let range = document.createElement("div")
let drone = document.createElement("div")
let checked = document.createElement("div")


let body = document.querySelector("body")
body.append(modal)
modal.append(h1, email, gender, color, range, drone, checked)

let handleSubmit = (event) =>{
    event.preventDefault()
    userInfo.name = form.elements.text.value
    userInfo.email = form.elements.email.value
    userInfo.gender = form.elements.gender.value
    userInfo.color = form.elements.color.value
    userInfo.terms = form.elements.terms.checked
    userInfo.range = form.elements.range.value
    userInfo.drone = form.elements.drone.value
    modal.style.display = "block"
} 
form.addEventListener("submit", handleSubmit)
console.log(userInfo)

console.log(`hello ${userInfo.name}`)
h1.innerText = `Hello ${userInfo.name}`

email.innerText = `Email: ${userInfo.email}`

gender.innerText = `You Love: ${userInfo.gender}`
color.innerText = `Color: ${userInfo.color}`
range.innerText = `Rating: ${userInfo.range}`
drone.innerText = `Book Genre: ${userInfo.drone}`
if(userInfo.checked === true){
    checked.innerText = `You agree to terms and conditions`
}else{
    checked.innerText = `You don't agree to terms and conditions`
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }






























