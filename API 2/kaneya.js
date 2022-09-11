

const load =() =>{
    fetch('https://api.kanye.rest/')
    .then(res =>res.json())
    .then(data => display(data));
}


const display = quote =>{

    const newQuote = document.getElementById('quote');

    newQuote.innerText =quote.quote;

    
}