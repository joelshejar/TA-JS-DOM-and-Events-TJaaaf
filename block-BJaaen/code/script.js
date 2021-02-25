const humanScore = document.getElementById("human-score")
const computerScore = document.getElementById("computer-score")
const comp = document.querySelector(".comp")
const hum = document.querySelector(".hum")
const humanChoice = document.getElementById('human-choice');

const computerChoice = document.getElementById('computer-choice');

const humanRock = document.getElementById('human-rock');
const humanPaper = document.getElementById('human-paper');
const humanScissors = document.getElementById('human-scissors');

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
const sp = document.querySelector(".sp")
const reset = document.querySelector(".reset")
let all = document.querySelectorAll(".far")

reset.addEventListener("click", () => {
    humanRock.style.color = "rgb(34,142,250)"
    humanPaper.style.color = "rgb(34,142,250)"
    humanScissors.style.color = "rgb(34,142,250)"
    computerScore.innerText = "0"
    humanScore.innerText = "0"
    computerRock.style.color = "black"
    computerPaper.style.color = "black"
    computerScissors.style.color = "black"
    confetti.stop()
})
var i = 0
var j = 0
humanRock.addEventListener("click", () => {
    confetti.stop()
    sp.innerText = ""
    humanRock.style.color = "black"
    humanPaper.style.color = "rgb(34,142,250)"
    humanScissors.style.color = "rgb(34,142,250)"
    console.log(humanRock.dataset.set)
    var humanValue = humanRock.dataset.set
    var computerValue = ""
    let computerSelection = () => {
        let computer = Math.random()
        if(computer < 0.3){
            computerRock.style.color = "black"
            computerPaper.style.color = "red"
            computerScissors.style.color = "red"
            return  computerValue = "Rock"
            
            
        } else if(computer < 0.6){
            computerRock.style.color = "red"
            computerPaper.style.color = "black"
            computerScissors.style.color = "red"
            return computerValue = 'Paper'
            
        } else {
            computerRock.style.color = "red"
            computerPaper.style.color = "red"
            computerScissors.style.color = "black"
            return computerValue = "Scissors"
            
        }
    }
    console.log(computerSelection())
    if(humanValue == computerValue){
        console.log("It's a tie.")
        sp.innerText = "Its a tie"
    } else if(computerValue == "Paper"){
        computerScore.innerText = i+1
        i=i+1
        console.log(i)
    }
    else{
        humanScore.innerText = j+1
        j=j+1
        confetti.start()
    }
})
humanPaper.addEventListener("click", () => {
    sp.innerText = ""
    confetti.stop()
    humanRock.style.color = "rgb(34,142,250)"
    humanPaper.style.color = "black"
    humanScissors.style.color = "rgb(34,142,250)"
    console.log(humanPaper.dataset.set)
    var humanValue = humanPaper.dataset.set
    var computerValue = ""
    let computerSelection = () => {
        let computer = Math.random()
        if(computer < 0.3){
            computerRock.style.color = "black"
            computerPaper.style.color = "red"
            computerScissors.style.color = "red"
            return  computerValue = "Rock"
            
            
        } else if(computer < 0.6){
            computerRock.style.color = "red"
            computerPaper.style.color = "black"
            computerScissors.style.color = "red"
            return computerValue = 'Paper'
            
        } else {
            computerRock.style.color = "red"
            computerPaper.style.color = "red"
            computerScissors.style.color = "black"
            return computerValue = "Scissors"
            
        }
    }
    console.log(computerSelection())
    if(humanValue == computerValue){
        console.log("It's a tie.")
        sp.innerText = "Its a tie"
    } else if(computerValue == "Scissors"){
        computerScore.innerText = i+1
        i=i+1
        console.log(i)
    }
    else{
        humanScore.innerText = j+1
        j=j+1
        confetti.start()
    }
})
humanScissors.addEventListener("click", () => {
    confetti.stop()
    sp.innerText = ""
    humanRock.style.color = "rgb(34,142,250)"
    humanPaper.style.color = "rgb(34,142,250)"
    humanScissors.style.color = "black"
    console.log(humanScissors.dataset.set)
    var humanValue = humanScissors.dataset.set
    var computerValue = ""
    let computerSelection = () => {
        let computer = Math.random()
        if(computer < 0.3){
            computerRock.style.color = "black"
            computerPaper.style.color = "red"
            computerScissors.style.color = "red"
            return  computerValue = "Rock"
            
            
        } else if(computer < 0.6){
            computerRock.style.color = "red"
            computerPaper.style.color = "black"
            computerScissors.style.color = "red"
            return computerValue = 'Paper'
            
        } else {
            computerRock.style.color = "red"
            computerPaper.style.color = "red"
            computerScissors.style.color = "black"
            return computerValue = "Scissors"
            
        }
    }
    console.log(computerSelection())
    if(humanValue == computerValue){
        console.log("It's a tie.")
        sp.innerText = "Its a tie"
    } else if(computerValue == "Rock"){
        computerScore.innerText = i+1
        i=i+1
        console.log(i)
    }
    else{
        
        humanScore.innerText = j+1
        j=j+1
        confetti.start()
    }
})






















