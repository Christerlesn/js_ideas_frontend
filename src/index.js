const endPoint = "http://localhost:3000/api/v1/ideas"

document.addEventListener('DOMContentLoaded', () => {
    getIdeas()

const createIdeaForm = document.querySelector("#create-idea-form")

createIdeaForm.addEventListener("submit", (e) =>  createFormHandler(e))

})

function getIdeas(){
    fetch(endPoint)
    .then(response => response.json())
    .then(ideas => {
        ideas.data.forEach(idea => {
        render(idea)
        })
    })
}

function render(idea){
    const ideaMarkup = `
    <div data-id= ${idea.id}>
        <h3>${idea.attributes.title}</h3>
        <p>${idea.attributes.description}</p>
        <p>${idea.attributes.category.name}</p>
    </div>
        <br></br>`
    document.querySelector('#idea-container').innerHTML += ideaMarkup
}

function createFormHandler(e){
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(titleInput, descriptionInput, categoryId)
}

function postFetch(title, description, category_id) {
    let bodyData = {title, description, category_id}
    fetch (endPoint, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(idea => {
        const ideaData = idea.data
        render(ideaData)
    })
    document.getElementById("create-idea-form").reset();
}