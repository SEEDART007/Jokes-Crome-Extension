fetch("https://official-joke-api.appspot.com/random_joke").then(data=>data.json()).then(jokeData=>{
const type=jokeData.type;
const setup= jokeData.setup;
const punchline=jokeData.punchline;
const newJoke= document.getElementById('first')
newJoke.innerHTML=type;
const newJoke1=document.getElementById('second')
newJoke1.innerHTML=setup;
const newJoke2=document.getElementById('third')
newJoke2.innerHTML=punchline


})