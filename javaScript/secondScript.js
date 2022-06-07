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

let newsContainer = document.querySelector("news_container");

for (let i = 0; news.length; i++){
    console.log(news.summary)
}