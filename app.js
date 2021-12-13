const buttons=document.querySelectorAll(".btn"), result= document.getElementById("result");
buttons.forEach((button) =>{
     button.addEventListener('click', (e)=>{
         result.textContent+=e.target.id;
     });
});

equal.addEventListener("click",()=>{
    result.textContent=eval(result.textContent);
});

clear.addEventListener("click", ()=>{
    result.textContent = " ";
});


/*Générateur de bulle*/
let counter =document.querySelector('.h3') ;
let icount=1;    
const bubbleMaker= ()=>{    
    const bubble=document.createElement("span");
    document.body.appendChild(bubble);
    bubble.classList.add("bubble");

    let sizes=Math.random()*200 + 100 + "px";
    bubble.style.height=sizes;
    bubble.style.width=sizes;

    bubble.style.top=Math.random()*100 + 50 + "%";
    bubble.style.left=Math.random()*100  + "%";

    const plusMinus = Math.random() >0.5 ? 1: -1;
    bubble.style.setProperty('--left', Math.random()*100 * plusMinus+"%"); 

    bubble.addEventListener("click", ()=>{
        bubble.remove();
        counter.textContent=icount++;
    })

    setTimeout(()=>{
        bubble.remove();
    }, 8000);
}
setInterval(bubbleMaker, 1000); 

/* Text typing */
const target = document.getElementById("target");
 let array =["développeur", "électrotechnicien", "créatif"];
 let wordIndex =0;
 let letterIndex = 0;

 const createLetter = ()=>{
    const letter = document.createElement("span");
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];
    setTimeout(() => {
        letter.remove();
    },2800);
}

const loop=()=>{
      setTimeout(() => {
          if(wordIndex>=array.length){
              wordIndex=0;
              letterIndex=0;
              loop();
          }else  if(letterIndex < array[wordIndex].length){
          createLetter();
          letterIndex++
          loop();
      }else{
      wordIndex++;
      letterIndex=0
      setTimeout(() => {
           loop();
      }, 2800);
    }
  }, 50);
}
loop();