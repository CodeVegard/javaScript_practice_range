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