const noteInput = document.querySelector("#note-input");
const noteButton = document.querySelector("#add-note");
const noteList = document.querySelector("#note-list");

let clickedElement;

noteButton.onclick = function () {
    noteList.innerHTML += `<li>${noteInput.value}<button>Done</button></li>`;
    
    const listedItems = document.querySelectorAll("li");
    listedItems.forEach(function(li) {
        li.onclick = function(event){
            clickedElement = this;
            clickedElement.classList.toggle("checked");
        }
    });
};
