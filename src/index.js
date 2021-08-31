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
            let newIdea = new Idea(idea, idea.attributes)
        document.querySelector('#idea-container').innerHTML += newIdea.renderIdeaCard()
        })
    })
    .catch(err => console.log(err)) //no idea how to test this.
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
        let ideaData = idea.data
        let newIdea = new Idea(ideaData, ideaData.attributes)
        document.querySelector('#idea-container').innerHTML += newIdea.renderIdeaCard()
    })
    document.getElementById("create-idea-form").reset();
}