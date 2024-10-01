const words="gura mama tata baba pneumonoultramicroscopicsilicovolcaniconioza gigel frone bambucea flucea carici mascarici sugubat baron local postac".split(' ');
const wordsCount=words.length;

function addClass(el,name)
{
  el.className += ' '+name;
}
function removeClass(el,name)
{
el.className=el.className.replace(name,'');
}

function randomWord()
{
  const randomIndex=Math.ceil(Math.random()*wordsCount);
  return words[randomIndex];
}

function formatWord(word)
{
return `<div class="word">
  <span class="letter"> 
    ${word.split('').join('</span><span class="letter">')}
  </span>
</div>` ;

}

function newGame()
{
document.getElementById("words").innerHTML='';
  for(let i=0;i<200;i++)
  {
    document.getElementById("words").innerHTML+=formatWord(randomWord());
  }
  addClass(document.querySelector('.word'),'current');
  addClass(document.querySelector('.letter'),'current');
}

document.getElementById('game').addEventListener('keyup',event =>{
  const key=event.key; //this is what letter we type
  console.log(event);
  const currentLetter=document.querySelector('.letter.current');
  const expected=currentLetter.innerHTML; //expected key

  console.log({key,expected})
});



newGame();

