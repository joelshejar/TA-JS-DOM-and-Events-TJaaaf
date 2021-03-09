function hello() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
}
var body = document.querySelector("body")
var ul = document.querySelector("ul")
var li1 = document.createElement("li")
var button1 = document.createElement("button")
button1.innerText = "Weight"
li1.classList.add("weight")
button1.classList.add("weight-button")
var li2 = document.createElement("li")
var button2 = document.createElement("button")
button2.innerText = "Length"
li2.classList.add("length")
button2.classList.add("length-button")
var li3 = document.createElement("li")
var button3 = document.createElement("button")
button3.innerText = "Currency"
li3.classList.add("currency")
button3.classList.add("currency-button")
var li4 = document.createElement("li")
var button4 = document.createElement("button")
button4.innerText = "Time"
li4.classList.add("time")
button4.classList.add("time-button")

li1.append(button1)
li2.append(button2)


ul.append(li1, li2, li3, li4)
button1.addEventListener("click", weightType)
button2.addEventListener("click", lengthType)

function lengthType(){
  body.innerHTML = ""
  let h2 = document.createElement("h2")
  h2.innerText = "Select your length type"
  let button1 = document.createElement("button")
  button1.innerText = 'Feet'
  button1.addEventListener("click", createFeet)
  let button2 = document.createElement("button")
  button2.innerText = 'Meter'
  button2.addEventListener("click", createMeter)
  let button3 = document.createElement("button")
  button3.innerText = 'Inches'
  button3.addEventListener("click", createInches)
  body.append(h2, button1,button2, button3)

  function createFeet(){
    body.innerHTML = ""
    function weightConverter(event) {
      let value = event.target.value
      document.getElementById("outputGrams").innerHTML = value /3.2808;
      document.getElementById("ounces").innerHTML = value *12;
    }
    let h2 = document.createElement("h2")
    h2.innerText = "Enter length in feet"
    let p = document.createElement("p")
    let label = document.createElement("label")
    label.innerText = "feet"
    let input = document.createElement("input")
    input.addEventListener("input", weightConverter)
    input.addEventListener("onchange", weightConverter)
    input.setAttribute('id', 'inputPounds')
    input.setAttribute('type', 'number')
    input.setAttribute('placeholder', 'feet')
    
    p.append(label, input)
    let p1 = document.createElement("p")
    p1.innerText = "Meter:"
    
    let span1 = document.createElement("span")
    span1.setAttribute('id', 'outputGrams')
    let p2 = document.createElement("p")
    p2.innerText = "Inches:"
    
    let span2 = document.createElement("span")
    span2.setAttribute('id', 'ounces')
    p1.append(span1)
    p2.append(span2)
    body.append(h2, p, p1, p2)
  }

  function createMeter(){
    body.innerHTML = ""
    function weightConverter(event) {
      let value = event.target.value
      document.getElementById("outputGrams").innerHTML = value *3.2808;
      document.getElementById("ounces").innerHTML = value *39.370;
    }
    let h2 = document.createElement("h2")
    h2.innerText = "Enter length in meter"
    let p = document.createElement("p")
    let label = document.createElement("label")
    label.innerText = "Meter"
    let input = document.createElement("input")
    input.addEventListener("input", weightConverter)
    input.addEventListener("onchange", weightConverter)
    input.setAttribute('id', 'inputPounds')
    input.setAttribute('type', 'number')
    input.setAttribute('placeholder', 'Meter')
    
    p.append(label, input)
    let p1 = document.createElement("p")
    p1.innerText = "Feet:"
    
    let span1 = document.createElement("span")
    span1.setAttribute('id', 'outputGrams')
    let p2 = document.createElement("p")
    p2.innerText = "Inches:"
    
    let span2 = document.createElement("span")
    span2.setAttribute('id', 'ounces')
    p1.append(span1)
    p2.append(span2)
    body.append(h2, p, p1, p2)
  }

  function createInches(){
    body.innerHTML = ""
    function weightConverter(event) {
      let value = event.target.value
      document.getElementById("outputGrams").innerHTML = value *0.083333;
      document.getElementById("ounces").innerHTML = value /39.370;
    }
    let h2 = document.createElement("h2")
    h2.innerText = "Enter length in inches"
    let p = document.createElement("p")
    let label = document.createElement("label")
    label.innerText = "Inches"
    let input = document.createElement("input")
    input.addEventListener("input", weightConverter)
    input.addEventListener("onchange", weightConverter)
    input.setAttribute('id', 'inputPounds')
    input.setAttribute('type', 'number')
    input.setAttribute('placeholder', 'Inches')
    
    p.append(label, input)
    let p1 = document.createElement("p")
    p1.innerText = "Feet:"
    
    let span1 = document.createElement("span")
    span1.setAttribute('id', 'outputGrams')
    let p2 = document.createElement("p")
    p2.innerText = "Meter:"
    
    let span2 = document.createElement("span")
    span2.setAttribute('id', 'ounces')
    p1.append(span1)
    p2.append(span2)
    body.append(h2, p, p1, p2)
  }
}



function weightType(){
  body.innerHTML = ""
  let h2 = document.createElement("h2")
  h2.innerText = "Select your weight type"
  let button1 = document.createElement("button")
  button1.innerText = 'Pounds'
  button1.addEventListener("click", createPounds)
  let button2 = document.createElement("button")
  button2.innerText = 'Kilograms'
  button2.addEventListener("click", createKilograms)
  let button3 = document.createElement("button")
  button3.innerText = 'Ounces'
  button3.addEventListener("click", createOunces)
  body.append(h2, button1,button2, button3)
  function createOunces(){
    body.innerHTML = ""
    function weightConverter(event) {
      let value = event.target.value
      document.getElementById("outputGrams").innerHTML = value *0.0625;
      document.getElementById("ounces").innerHTML = value /35.274;
    }
    let h2 = document.createElement("h2")
    h2.innerText = "Enter weight in ounces"
    let p = document.createElement("p")
    let label = document.createElement("label")
    label.innerText = "Ounce"
    let input = document.createElement("input")
    input.addEventListener("input", weightConverter)
    input.addEventListener("onchange", weightConverter)
    input.setAttribute('id', 'inputPounds')
    input.setAttribute('type', 'number')
    input.setAttribute('placeholder', 'Ounces')
    
    p.append(label, input)
    let p1 = document.createElement("p")
    p1.innerText = "Pounds:"
    
    let span1 = document.createElement("span")
    span1.setAttribute('id', 'outputGrams')
    let p2 = document.createElement("p")
    p2.innerText = "Kilograms:"
    
    let span2 = document.createElement("span")
    span2.setAttribute('id', 'ounces')
    p1.append(span1)
    p2.append(span2)
    body.append(h2, p, p1, p2)
  }


  function createKilograms(){
    body.innerHTML = ""
    function weightConverter(event) {
      let value = event.target.value
      document.getElementById("outputGrams").innerHTML = value *2.2046;
      document.getElementById("ounces").innerHTML = value *35.274;
    }
    let h2 = document.createElement("h2")
    h2.innerText = "Enter weight in kilograms"
    let p = document.createElement("p")
    let label = document.createElement("label")
    label.innerText = "Kilograms"
    let input = document.createElement("input")
    input.addEventListener("input", weightConverter)
    input.addEventListener("onchange", weightConverter)
    input.setAttribute('id', 'inputPounds')
    input.setAttribute('type', 'number')
    input.setAttribute('placeholder', 'Kilograms')
    
    p.append(label, input)
    let p1 = document.createElement("p")
    p1.innerText = "Pounds:"
    
    let span1 = document.createElement("span")
    span1.setAttribute('id', 'outputGrams')
    let p2 = document.createElement("p")
    p2.innerText = "Ounces:"
    
    let span2 = document.createElement("span")
    span2.setAttribute('id', 'ounces')
    p1.append(span1)
    p2.append(span2)
    body.append(h2, p, p1, p2)
    
  }
  function createPounds(){
    body.innerHTML = ""
    function weightConverter(event) {
      let value = event.target.value
      document.getElementById("outputGrams").innerHTML = value / 2.2046;
      document.getElementById("ounces").innerHTML = value * 16;
    }
    let h2 = document.createElement("h2")
    h2.innerText = "Enter weight in pounds"
    let p = document.createElement("p")
    let label = document.createElement("label")
    label.innerText = "Pounds"
    let input = document.createElement("input")
    input.addEventListener("input", weightConverter)
    input.addEventListener("onchange", weightConverter)
    input.setAttribute('id', 'inputPounds')
    input.setAttribute('type', 'number')
    input.setAttribute('placeholder', 'Pounds')
    
    p.append(label, input)
    let p1 = document.createElement("p")
    p1.innerText = "Kilograms:"
    
    let span1 = document.createElement("span")
    span1.setAttribute('id', 'outputGrams')
    let p2 = document.createElement("p")
    p2.innerText = "Ounces:"
    
    let span2 = document.createElement("span")
    span2.setAttribute('id', 'ounces')
    p1.append(span1)
    p2.append(span2)
    body.append(h2, p, p1, p2)
    
  
  
  }
}



















