const endPoint = "http://localhost:3000/api/v1/ideas"

document.addEventListener('DOMContentLoaded', () => {
    getIdeas()
})

function getIdeas(){
    fetch(endPoint)
    .then(response => response.json())
    .then(ideas => {
        ideas.data.forEach(idea => {
            const ideaMarkup = `
            <div data-id= ${idea.id}>
                <h3>${idea.attributes.title}</h3>
                <p>${idea.attributes.description}</p>
                <p>${idea.attributes.category.name}</p>
            </div>
            <br></br>`
        document.querySelector('#idea-container').innerHTML += ideaMarkup
        })
    })
}