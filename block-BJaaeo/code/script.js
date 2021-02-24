var display = document.querySelector(".display")



let random = (y) => {

    console.log(y)
    if(y === "="){
        display.innerText = eval(display.innerText)
    } else if(y =="C"){
        display.innerText = 0
    }
     else{
        let display = document.querySelector(".display")
        display.innerText = display.innerText + String(y)
    }
    
    

}



let btn = document.querySelectorAll("button")
btn.forEach(x => {
    if(x.classList.length === 0){
        x.addEventListener("click", () => {
            random(x.value)
        })
    } else if(x.classList.contains("operator")){
        x.addEventListener("click", () => {
            random(x.value)
        })
    } else if(x.classList.contains("decimal")){
        x.addEventListener("click", () => {
            random(x.value)
        })
    } else if(x.classList.contains("equal-to")){
        x.addEventListener("click", () => {
            random(x.value)
        })
    } else if(x.classList.contains("reset")){
        x.addEventListener("click", () => {
            random(x.value)
        })
    }
})











