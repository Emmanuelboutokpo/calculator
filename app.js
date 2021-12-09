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