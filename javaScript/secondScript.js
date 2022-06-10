let i; 

let news = [
    {
        headline: "This is the first Headline",
        summary: "This is the first Summary",
    },
    {
        headline: "This is the second Headline",
        summary: "This is the second Summary",
    }
];

let newsContainer = document.querySelector(".news_container");

for (i = 0; i < news.length; i++){
    let item = news[i];
    console.log(news[0].headline)
    newsContainer.innerHTML += "<h2>" + item.headline + "</h2>" + "<p>" + item.summary + "</p>";
}

let tools = [
    {
        id: 354,
        name: "Hammer",
        price: 19.00,
    },
    {
        id: 123,
        name: "Wrench",
        price: 13.21,
    },
    {
        id: 431,
        name: "Level",
        price: 35.00, 
    },
    {
        id: 132,
        name: "Screwdriver",
        price: 5.42, 
    }
];

console.log(tools);

const sortedTools = tools.sort(function(toolA, toolB){
    if (toolA.price > toolB.price){
        return 1; //this will move tool B "up" in relation to tool A
    }
    if (toolA.price > toolB.price){
        return -1; //moves B down in relation to A
    }
    if (toolA.price > toolB.price){
        return 0; // changes nothing
    }
});

console.log(sortedTools);

let products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];

let unorderedList = document.querySelector(".list");

for (i = 0; i < products.length; i++){
    let listItems = products[i];
    unorderedList.innerHTML += "<li>" + listItems.name + " " + "-" + " " +  listItems.price + "</li>";
};

/*
function multiplyIfNumber (firstNumber, secondNumber){
    let numCheck1 = typeof firstNumber; 
    let numCheck2 = typeof secondNumber;
    if (numCheck1!=="number" || numCheck2!=="number"){
        let errorMessage = "Please supply number values";
        return errorMessage;  
    } 
    return firstNumber*secondNumber;
}; 

let result = multiplyIfNumber(2,3);
console.log(result);
*/


function threeArg(arg1, arg2, arg3){
    let firstArg = typeof arg1;
    let secondArg = typeof arg2;
    let thirdArg = typeof arg3;
    let lengthOfArg1 = arg1.length;
    let lengthOfArg2 = arg2.length;
    let lengthOfArg3 = arg3.length;
    if (firstArg === "string" && secondArg === "string" && thirdArg === "string")
        return lengthOfArg1 + lengthOfArg2 + lengthOfArg3;
    if (firstArg !== "number" && secondArg !== "number" && thirdArg !== "number"){
        return "Invalid argument types"
    }
    if (firstArg === "number" && secondArg === "number" && thirdArg === "number"){
        return arg1 + arg2 + arg3;
    }
};

let result = threeArg("a,2,3","3,2,3","31,2,3");
console.log(result);
let pElement = document.querySelector(".fill_me");
pElement.innerHTML = result;

let header = document.querySelector(".quest5");
let headingBtn = document.querySelector(".heading_btn");
headingBtn.onclick = function updateHeader() {
    header.innerHTML += ": Updated"
};


let titleBtn = document.querySelector(".title");
titleBtn.onclick = function(){
    document.title = "I've been updated!"
};