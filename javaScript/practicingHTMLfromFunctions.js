const colours = ["red", "blue", "green"];

//We're going to create an HTML list from the array above 

function createList(items){
    let listItems = "";
    for (let i = 0; i < items.length; i++) {
        listItems += "<li>"+items[i]+"</li>";
    }

    const finalHTML = "<ul>"+ listItems + "</ul>";
    return finalHTML;
}

let newList = createList(colours);
console.log(newList);

const container = document.querySelector("div");


container.innerHTML = newList;