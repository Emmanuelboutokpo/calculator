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

/*Générateur de Mot de passe*/
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù_-!:;,&é'\"{#~[]|}(=)è``%+-/.";

const rangeLength =document.getElementById("password-length");
const passwordOutput =document.getElementById("password-output");

generateButton.addEventListener("click", ()=>{
   let data =[];
  let password="";

   if(lowercase.checked) data.push(...dataLowercase);
   if(uppercase.checked) data.push(...dataUppercase);
   if(number.checked) data.push(...dataNumbers);
   if(symbols.checked) data.push(...dataSymbols);

   if (data.length === 0){
    alert("Veuillez choisir le bon paramètre");
    return;
}

   for (let i = 0;  i < rangeLength.value; i++ ) {
      password += data[Math.floor(Math.random() * data.length)];
   }
   passwordOutput.value=password;
   generateButton.textContent ="Copie!";

   setTimeout(() => {
      generateButton.textContent ="Générer le mot de passe"; 
   }, 2000);

   passwordOutput.select();
   document.execCommand("copy");
});

