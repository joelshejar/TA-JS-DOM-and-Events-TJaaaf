let input = document.querySelector('.got-input')
let starks = document.querySelector('.starks')
let lannisters = document.querySelector('.lannisters')
let baratheons = document.querySelector('.baratheons')
let targaryens = document.querySelector('.targaryens')
let greyjoys = document.querySelector('.greyjoys')
let tyrells = document.querySelector('.tyrells')
let tullys = document.querySelector('.tullys')
let redwyne = document.querySelector('.redwyne')
let freys = document.querySelector('.freys')
let arryns = document.querySelector('.arryns')
let dothrakis = document.querySelector('.dothrakis')
function handleStarks(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'starks'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleLannisters(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'lannisters'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleBaratheons(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'baratheons'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleTargaryens(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'targaryens'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleGreyjoys(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'greyjoys'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleTyrells(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'tyrells'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleTullys(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'tullys'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleRedwyne(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'redwyne'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleFreys(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'freys'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleArryns(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'arryns'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}
function handleDothrakis(){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    got.houses.forEach((elm) => {
        if(elm.name.toLocaleLowerCase() === 'dothrakis'){
            elm.people.forEach((element) => {
                
                 
                 let random = document.querySelector('.got-names')
                 
                 let div = document.createElement('div')
                 let img = document.createElement('img')
                 let h2 = document.createElement('h2')
                 let p = document.createElement('p')
                 let a = document.createElement('a')
                 h2.innerText = element.name
                 img.src = element.image
                 p.innerText = element.description
                 a.innerText = 'Know More!'
                 a.href = element.wikiLink
                 div.append(img, h2, p, a)
                 random.append(div)
                 
                }
            )
    }
        
    })
}

function handleSearch(event){
    let random = document.querySelector('.got-names')
    random.innerHTML = ""
    let value = event.target.value
    if(value ==''){
        let random = document.querySelector('.got-names')
        random.innerHTML = ""
    }
    got.houses.forEach((elm) => {
        elm.people.forEach((element) => {
           if(element.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
            
            let random = document.querySelector('.got-names')
            
            let div = document.createElement('div')
            let img = document.createElement('img')
            let h2 = document.createElement('h2')
            let p = document.createElement('p')
            let a = document.createElement('a')
            h2.innerText = element.name
            img.src = element.image
            p.innerText = element.description
            a.innerText = 'Know More!'
            a.href = element.wikiLink
            div.append(img, h2, p, a)
            random.append(div)
            if(value == ''){
                let random = document.querySelector('.got-names')
                random.innerHTML = ""
            }
           }
       })
    })
}

starks.addEventListener('click', handleStarks)
lannisters.addEventListener('click',handleLannisters)
baratheons.addEventListener('click',handleBaratheons)
targaryens.addEventListener('click',handleTargaryens)
greyjoys.addEventListener('click',handleGreyjoys)
tyrells.addEventListener('click',handleTyrells)
tullys.addEventListener('click',handleTullys)
redwyne.addEventListener('click',handleRedwyne)
freys.addEventListener('click',handleFreys)
arryns.addEventListener('click',handleArryns)
dothrakis.addEventListener('click',handleDothrakis)
input.addEventListener('keyup', handleSearch)





























