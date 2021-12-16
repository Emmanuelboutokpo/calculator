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

/*Formulaire de securité Form-Checker */

const forms=document.querySelector("form");
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
let pseudo, email, password,confirmPass;
const progressBar = document.getElementById("progress-bar");


const errorDisplay = (tag, message, valid) =>{
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container > span");

    if (!valid) {
        container.classList.add("error");
        span.textContent=message;
    } else {
        container.classList.remove('error');
        span.textContent=message;
    }
}

const pseudoChecker = (value) =>{
    if (value.length >0 && (value.length < 3 || value.length >20)) 
    {
        errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères!");
        pseudo=null;  
    } 
    else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) 
    {
        errorDisplay("pseudo", "Le pseudo ne doit pas caractères spéciaux!");
        pseudo=null;  
    } 
    else 
    {
       errorDisplay("pseudo", "", true);
        pseudo=value;  
    }
};

const emailChecker = (value) =>{
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) 
    {
        errorDisplay("email", "Le email n'est pas valide!");
        email=null;
    } 
    else 
    {
        errorDisplay("email", " ", true);
        email=value;
    }
};

const passwordChecker = (value) =>{
    progressBar.classList="";

    if (!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)) 
    {
         errorDisplay("password", "Minimum 8 caractères, une majuscule, un chiffre et un caractère spécial!");
         progressBar.classList.add("progressRed");
         password=null;
    } 
    else if (value.length<12) {
        errorDisplay("password", " ", true);
        progressBar.classList.add("progressBlue");
        password=value;
    } 
    else 
    {
        errorDisplay("password", " ", true);
        progressBar.classList.add("progressGreen");
        password=value;
    }  
    if (confirmPass) confirmChecker(confirmPass);
};
  
const confirmChecker = (value) =>{
    if (value !== password) 
    {
        errorDisplay("confirm", "Les mots de passe ne corespondent pas!");
        confirmPass=false;    
    } 
    else 
    {
        errorDisplay("confirm", "", true );
        confirmPass=true;    
    }
};

inputs.forEach((input)=>{
    input.addEventListener('input',(e)=>{
         switch (e.target.id) {
            case "pseudo":
                pseudoChecker(e.target.value);
               break;

               case "email":
                  emailChecker(e.target.value);
                 break;

                 case "password":
                  passwordChecker(e.target.value);
                 break; 

                 case "confirm":
                  confirmChecker(e.target.value);
                 break;

            default:  null;
               break;
         }
    })
});

 forms.addEventListener("submit", (e)=>{
     e.preventDefault();
     if (pseudo && email && password && confirmPass) {
         const data = {
             pseudo:pseudo,
             email:email,
            password:password
         };
         console.log(data);

         inputs.forEach((input)=>{ input.value = "";});
         progressBar.classList="";
        
         pseudo=null;
         email=null;
         password=null;
         confirmPass=null;
         alert("Inscription validée!")
     }
     else{
         alert("veuillez remplir tout les champs!")
     }
 })