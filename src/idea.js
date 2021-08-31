class Idea {
    constructor(idea, ideaAttributes){
        this.id = idea.id;
        this.title = ideaAttributes.title;
        this.description = ideaAttributes.description;
        this.category = ideaAttributes.category;
        Idea.all.push(this);
    }
    renderIdeaCard(){
        return `
        <div data-id= ${this.id}>
         <h3>${this.title}</h3>
         <p>${this.description}</p>
         <p>${this.category.name}</p>
        </div>
        <br><br>`
    }
    static filterByCategory(category){
        return this.all.filter(idea => idea.category.name === category);
    }

}
Idea.all = []