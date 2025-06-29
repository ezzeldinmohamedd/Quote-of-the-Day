var allQuotes = [   
{
    quoteBody:`I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    writtenBy:`--Marilyn Monroe`,
},
{
    quoteBody:`It's not what happens to you, but how you react to it that matters.`,
    writtenBy:`--Epictetus`,
},
{
    quoteBody:`Be yourself; everyone else is already taken.`,
    writtenBy:`--Oscar Wilde`,
},
{
    quoteBody:`A room without books is like a body without a soul.`,
    writtenBy:`--Marcus Tullius Cicero`,
},
{
    quoteBody:`A room without books is like a body without a soul.`,
    writtenBy:`--Marcus Tullius Cicero`,
},
{
    quoteBody:`You only live once, but if you do it right, once is enough.`,
    writtenBy:`--Mae West`,
},
{
    quoteBody:`Be the change that you wish to see in the world.`,
    writtenBy:`--Mahatma Gandhi`,
},
{
    quoteBody:`A friend is someone who knows all about you and still loves you.`,
    writtenBy:`--Elbert Hubbard`,
},
{
    quoteBody:`It is better to be hated for what you are than to be loved for what you are not.`,
    writtenBy:`--Andre Gide`,
},
];

var previousIndex = -1;
function getQuote(){
    var index;
    do{
        index = Math.floor(Math.random() * allQuotes.length);
    }while(index == previousIndex)
    previousIndex = index;
    var quote = document.getElementById("quotes").innerHTML=`
    <p>${allQuotes[index].quoteBody}</p>
        <h5>${allQuotes[index].writtenBy}</h5>
    `;
}