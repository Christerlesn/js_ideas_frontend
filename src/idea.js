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
        <div id= ${this.id}>
         <h3>${this.title}</h3>
         <p>${this.description}</p>
         <h4>${this.category.name}</h4>
        </div>
        <br><br>`
    }
    static filterByCategory(category){
        return this.all.filter(idea => idea.category.name === category);
    }

}
Idea.all = []