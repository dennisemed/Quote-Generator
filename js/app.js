// variables created to store the elements in HTML file
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

// Array created to store the quotes and their authors
const quotes = [
    {
        quote:"Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote:"A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch"
    }
];

// Function created to change randomly the "Quote & Author" displayed on the screen when button is clicked 
btn.addEventListener("click", function () {
    // Generates randomly an index, which will be used to select a quote, stored in the array "quotes"
    // This function can be transformed and connect to a .json file
    let random = Math.floor(Math.random() * quotes.length);

    // pushes the Quote and their Author in HTML
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})
