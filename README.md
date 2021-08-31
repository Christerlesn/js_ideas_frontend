TO DO LIST:

[] - Complete this task: When a category button is clicked, I want to make a get request and return the singular, random, data.
    - Set up the buttons (in HTML?)
    - Set up the div for the buttons in HTML `<div id="randomized-idea"></div>`
    - Create the variable ` let categoryBtn = document.querySelector("#btn-category")`
    - Followed by the event: `ideaFromCategory.addEventListener("click", e => { const idea = Idea.filterByCategory(e);                                  document.querySelector('#randomized-idea').innerHTML +=                     idea.randomIdeaByCategory(e)                                                                               }//this may be a bit wrong.`
    - Then create an if statement depending on what the bnt says, to return a random idea based off the category button selected. Then return the get request or however it works.

    [] - Start CSS design. 
    - How I want it to look
    ` |category|  |category| |category|
    _____________random idea based off category title________________
    __________________description_________________________
    _________________category____________________________

    ALL IDEAS
    idea1
    idea2
    idea3
    (no particular order)

    Create a new Idea!
    //form of the new idea goes here
    `