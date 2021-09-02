const endPoint = "http://localhost:3000/api/v1/ideas"

document.addEventListener('DOMContentLoaded', () => {
    getIdeas()

const createIdeaForm = document.querySelector("#create-idea-form")
createIdeaForm.addEventListener("submit", (e) =>  createFormHandler(e))

let categoryBtn = document.querySelector(".btn-category")
categoryBtn.addEventListener("click", e => filterBtns(e))

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
        document.querySelector('#random-idea-container').innerHTML = newIdea.renderIdeaCard()
        document.querySelector('#idea-container').innerHTML += newIdea.renderIdeaCard()

    })
    .catch(err => console.log(err))
    document.getElementById("create-idea-form").reset();

}

function filterBtns(e){
    e.preventDefault(); 
    if ((e.target) && e.target.nodeName == "BUTTON")
    categoryButtonHandler(e.target.innerHTML)
}

function categoryButtonHandler(theInnerHTML){
    // const myElement = document.querySelector('#btn-social-media').innerText;
    let filteredIdeas = Idea.filterByCategory(theInnerHTML)
    randomIdeaByCategory(filteredIdeas)
}

function randomIdeaByCategory(list){
    const res = [];
    for (let x = 1; x <= list.length; x++){
        const random = Math.floor(Math.random() * list.length);
        res.push(list[random]);
    }
        let randomIdea = res[0];
        document.querySelector('#random-idea-container').innerHTML = randomIdea.renderIdeaCard()
    // different way. Harder to explain. More randomized.
    // let randomizedIdea = [...list].sort(() => Math.random() > 0.5 ? 1 : -1)
    // return randomizedIdea

}

// let smb = "btn-social-media"
// let t = document.getElementById("btn-social-media")
// t.id === smb