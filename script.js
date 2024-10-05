
let time=document.getElementById('now-time');
const currentDate=new Date();
let nowDate;
nowDate=new Date();

setInterval(()=>{

time.innerHTML=nowDate;
 
})


/**/
  const stopwatcher=document.getElementById('stop-time');

 

  const startTime=new Date();

let interval;
  let elapsedTime=0;
function startButton()
{

  if(interval==null)
    interval=setInterval(updateStopwatch,1000)
 
}

  

  //nameofday.setAttribute('value','gd.csv');

  
   const newElement=document.createElement('p');


function updateStopwatch()
{
    elapsedTime+=1;
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  newElement.textContent=hours+':'+ minutes+ ':'+seconds;

  stopwatcher.textContent=newElement.innerHTML;




}

function stopButton()
{
  clearInterval(interval);
  interval=null;
}
const timeUList=document.getElementById('time-ul');//where to put
let TotalTime=0;//measures total time

//add 




function restartButton()
{
  TotalTime+=elapsedTime;
  const timeList=document.createElement('li');

  stopButton()
timeUList.appendChild(timeList);

  timeList.textContent=newElement.innerHTML;
  
   elapsedTime=0;
  stopwatcher.innerHTML='00:00:00'
/*For the TOTAL TIME paragraph*/
 updateTotalTime()
}
/*timer*/

function updateTotalTime()
  {
const ContainerTotalTime=document.createElement('p');

const totalTimeElement=document.getElementById('total-time');


  const hours = Math.floor(TotalTime / 3600);
  const minutes = Math.floor((TotalTime % 3600) / 60);
  const seconds = TotalTime % 60;


  totalTimeElement.textContent=hours+':'+ minutes+ ':'+seconds;
totalTimeElement.appendChild(ContainerTotalTime);
  }



   let intervalT;

function timerf()
{
    intervalT==null;
  
const ContainerTotalTime=document.createElement('p');

const totalTimeElement=document.getElementById('total-time');

  const hours = Math.floor(TotalTime / 3600);
  const minutes = Math.floor((TotalTime % 3600) / 60);
  const seconds = TotalTime % 60;

  totalTimeElement.textContent=hours+':'+ minutes+ ':'+seconds;
totalTimeElement.appendChild(ContainerTotalTime);
}






 let startValue;
 let inputValue;
 let progress;

 let startVa


function InputButton()
{

  startValue = document.getElementById('input-timer').value*60;//put *60
  inputValue=startValue; 

 progress=document.getElementById('progress-circle');

  
    if(intervalT==null)
 intervalT=setInterval(InputUpate,1000)

}

function stopTimer()///////////
{
  clearInterval(intervalT);
  intervalT=null;
}
function startTimer()
{
  if(intervalT==null)
    intervalT=setInterval(InputUpate(),1000)
}

function InputUpate()
{   
   if(startValue>=1)
     {
  
      startValue-=1;
    progress.setAttribute('value',startValue);

    progress.style.setProperty('--progress',startValue/inputValue+'turn');
    console.log(inputValue/startValue);
    //TODO modify here
    // progress=document.getElementById('progress-circle');
    progress.setAttribute('data-progress',Math.floor(100-startValue/inputValue*100));
  ///
    const RuntimeTeller=document.createElement('p');
    const RuntimeTellerContainer=document.getElementById('g')
      RuntimeTellerContainer.appendChild(RuntimeTeller);


  
     }
    else if(startValue===0)
    {
  const RuntimeTellerContainer=document.createElement('p');
  const RuntimeTeller=document.getElementById('g')
  RuntimeTeller.textContent='Time out';
      RuntimeTeller.appendChild(RuntimeTellerContainer);
      play();


     // const finishTime=document.createElement('p');
   //   const finishTimeContainer=document.getElementById('timeOver')
    

       


    }
    else
    {
        const RuntimeTellerContainer=document.createElement('p');
  const RuntimeTeller=document.getElementById('g')
  RuntimeTeller.textContent='Insert other number';
      RuntimeTeller.appendChild(RuntimeTellerContainer);
    }
  


  
  if(Number.isInteger(startValue))
    {
const ContainerTotalTime=document.createElement('p');
  const InputElement=document.getElementById('timer');


    const hours = Math.floor(startValue / 3600);
  const minutes = Math.floor((startValue % 3600) / 60);
  const seconds = startValue % 60;

InputElement.textContent = hours +':'+ minutes+ ':'+seconds;

      ContainerTotalTime.textContent=InputElement.innerHTML;
      
    }


}




function play() {
  let audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
  audio.play();
}

function orardate()
{
  var ziua;
  console.log(currentDate.getDay())
  switch(currentDate.getDay())
  {

    case 0://
      ziua=document.getElementById("luni")
      ziua.classList.add('new-style');
      
   case 1:
    ziua=document.getElementById("luni")
    ziua.classList.add('new-style');
   break;
   case 2:
    console.log("gfgds");
    ziua=document.getElementById("marti")
    ziua.classList.add('new-style');
   break;
   case 3:
    ziua=document.getElementById("miercuri")
    ziua.classList.add('new-style');
   break;
   case 4:
    ziua=document.getElementById("joi")
    ziua.classList.add('new-style');
   break;
   case 5:
    ziua=document.getElementById("vineri")
    ziua.classList.add('new-style');
   break;



   case 6:
    ziua=document.querySelector("#vineri")

    ziua.classList.add('new-style');
    //la fiecare de asta voi face alt switch care o sa aibe 4-5 ore care o sa se coloreze depinzand de ce ore sunt pe moment
   break;
  }


}

