// TODO: add code here
window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(response => response.json()).then(json => {
        // console.log(json);

        // get our astronaut container:
        const astronautContainerDiv = document.getElementById('container');
        
        // for each astronaut in JSON:
            // create a new HTML element
        for(const astronautObject of json) {
            astronautContainerDiv.appendChild(createAstronautHTMLDivElement(astronautObject));
        }

    });
});

const createAstronautHTMLDivElement = (astronautObject) => {
    const newDivElement = document.createElement("div");

    // add class to div
    newDivElement.className = "astronaut";

    // create a new HTML h3 element
    const newH3Element = document.createElement("h3");

    // new HTML h3 elements innerText
    newH3Element.innerText = `${astronautObject.firstName} ${astronautObject.lastName}`;

    //  add this new HTML h3 element (with text) to the newDivElement
    newDivElement.appendChild(newH3Element);

    const unorderedListElement = document.createElement("ul");

    const listItemHoursInSpaceElement = document.createElement("li");
    listItemHoursInSpaceElement.innerText = "Hours is space: " + astronautObject.hoursInSpace;
    unorderedListElement.appendChild(listItemHoursInSpaceElement)
    
    const listItemActiveElement = document.createElement("li");
    listItemActiveElement.innerText = "Active: " + astronautObject.active;
    unorderedListElement.appendChild(listItemActiveElement);

    const listItemSkills = document.createElement("li");
    listItemSkills.innerText = "Skills: " + astronautObject.skills.join(", ");
    unorderedListElement.appendChild(listItemSkills);

    newDivElement.appendChild(unorderedListElement);
    
    const imageElement = document.createElement('img');
    imageElement.src = astronautObject.picture;
    imageElement.className = "avatar";

    newDivElement.appendChild(imageElement);

    return newDivElement;
}

