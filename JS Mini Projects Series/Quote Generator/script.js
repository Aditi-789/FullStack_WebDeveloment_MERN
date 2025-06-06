// const api_url = "https://zenquotes.io/api/quotes/";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function showQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

showQuote(api_url);