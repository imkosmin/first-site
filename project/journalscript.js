let downloadtimes=0;



function download(filename,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10) 
{
  var element = document.createElement('a');

  const barbell1=document.getElementById("barbell1");
  const barbell2=document.getElementById("barbell2");
  const barbell3=document.getElementById("barbell3");
  const barbell4=document.getElementById("barbell4");
  const barbell5=document.getElementById("barbell5");
  const barbell6=document.getElementById("barbell6");
  const barbell7=document.getElementById("barbell7");
  const barbell8=document.getElementById("barbell8");
  const barbell9=document.getElementById("barbell9");
  const barbell10=document.getElementById("barbell10");

  const otherCheckbox = document.getElementById("checkboxs");
  
  var isCardioOn;



    if (otherCheckbox.checked)
      isCardioOn= encodeURIComponent("\n \n Cardio ,yes");
    else
      isCardioOn= encodeURIComponent("\n \n Cardio ,no");

  
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(new Date()+"\n")+encodeURIComponent("Workout name,Reps, KG \n")+encodeURIComponent(barbell1.innerText+",")+encodeURIComponent(text1) 
  +encodeURIComponent("\n"+barbell2.innerText+",") +encodeURIComponent(text2) 
  +encodeURIComponent("\n"+barbell3.innerText+",") +encodeURIComponent(text3)
  +encodeURIComponent("\n"+barbell4.innerText+",") +encodeURIComponent(text4)
  +encodeURIComponent("\n"+barbell5.innerText+",") +encodeURIComponent(text5)
  +encodeURIComponent("\n"+barbell6.innerText+",") +encodeURIComponent(text6)
  +encodeURIComponent("\n"+barbell7.innerText+",") +encodeURIComponent(text7) 
  +encodeURIComponent("\n"+barbell8.innerText+",") +encodeURIComponent(text8)
  +encodeURIComponent("\n"+barbell9.innerText+",") +encodeURIComponent(text9)
  +encodeURIComponent("\n"+barbell10.innerText+",") +encodeURIComponent(text10)
  +isCardioOn
  );


  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
  downloadtimes++




}


function downloadjournal(filename,text) 
{
  var element = document.createElement('a');


  element.setAttribute('href', 'data:text/plain;charset=utf-8,' +encodeURIComponent(text)) ;

  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
  downloadtimes++
}






//const event = new Date;
//gg=event.toString()
/*
window.addEventListener("beforeunload", (event) => {
  // set a truthy value to property returnValue
  event.returnValue = true;
});
*/
