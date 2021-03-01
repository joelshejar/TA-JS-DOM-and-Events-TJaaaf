let input = document.querySelector(`input[type="text"]`)
let random = document.querySelector(".movies")

let allMovies = [
    {
        name: "Forest Gump",
        watched: false,
    },
    {
        name:"Inception",
        watched:false,
    },
]


input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        console.log(event.target.value)


        allMovies.push({
            name: event.target.value,
            watched: false,
        })
        event.target.value = ""
        createMovieUI()
    }
    
})
function handleChange(event){
    let id = event.target.id
    allMovies[id].watched = !allMovies[id].watched
}

function deleteMovie(event) {
    //event.target.parentElement.remove()
    let id = event.target.dataset.id
    allMovies.splice(id, 1)
    createMovieUI()
}



function createMovieUI() {
    random.innerHTML = ""
    allMovies.forEach((movie, index) => {
        let li = document.createElement("li")
        let input = document.createElement("input")
        input.classList.add('check')
        input.type = "checkbox"
        input.id = index
        input.checked = movie.watched
        input.addEventListener("change", handleChange)
        let label = document.createElement("label")
        label.for = index
        label.innerText = movie.name
        let span = document.createElement("span")
        span.innerText = "✖"
        span.setAttribute("data-id", index)
        span.addEventListener('click', deleteMovie)

        li.append(input, label, span)
        random.append(li)


    })

    
}
createMovieUI()

























