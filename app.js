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

displayPassword.addEventListener("click", ()=>{
    const displays = document.getElementById("password"),display=document.getElementById("confirm");
    if ((displays.type === "password") && (display.type ==="password") )
    {
        displays.type="text";            
        display.type="text";
    }
 else {
        displays.type="password";
        display.type="password";
    }
});

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


 /* Countdown timer*/
 const forms = document.querySelector("form");
 forms.addEventListener("submit", (e)=>{
     e.preventDefault();
     const  countdown = ()=>{
        const dates = new Date(document.getElementById("checkdate").value);
        const newYearsValide = new Date(dates);
         const  currentDate = new Date();
         const totalSecond = Math.floor((newYearsValide - currentDate)/1000);
        
         const spanDays = document.getElementById("days");
        const spanHours = document.getElementById("hours");
        const spanMins = document.getElementById("mins");
        const spanSeconds = document.getElementById("seconds");
     
        const days = Math.floor(totalSecond/86400);
        const hours = Math.floor((totalSecond/ 3600) % 24);
        const minutes = Math.floor((totalSecond/60)%60);
        const seconds = Math.floor(totalSecond%60);
        
        spanDays.textContent = days;
        spanHours.textContent = hours;
        spanMins.textContent = minutes;
        spanSeconds.textContent = seconds;
     
    }
    countdown();
    setInterval(countdown, 1000);
})

/* QUESTIONNAIRE */

const quizData =[
    {
        question : "How old is Florin ?",
         a: "10",
         b: "17",
         c: "26",
         d: "110",
         correct : "c"
    },

    {
       question : "What is the best programming language in 2019 ?",
        a: "Java",
        b: "C",
        c: "JavaScript",
        d: "Python",
        correct : "c"
   },

   {
       question : "Who is the president of  US?",
        a: "BOUTOKPO Emmanuel",
        b: "Donald TRUMP",
        c: "Ivan SALDANO",
        d: "YAYI Boni",
        correct : "b"
   },

   {
       question : "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Object Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorola Lamborginis",
        correct : "a"
   },

   {
       question : "What year was JavaScript launched ?",
        a: "2022",
        b: "2000",
        c: "1994",
        d: "1995",
        correct : "d"
   },
];

const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");
const buttons= document.getElementById("submit");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score = 0 ;

const deselectAnswer = () =>{
   answersEls.forEach(answersEl =>{
       answersEl.checked = false;
   });
}

const loadQuiz =()=>{
   deselectAnswer();
    const currentQuizDate = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizDate.question;
    
    a_text.innerText = currentQuizDate.a;
    b_text.innerText = currentQuizDate.b;
    c_text.innerText = currentQuizDate.c;
    d_text.innerText = currentQuizDate.d;
   }
   loadQuiz();
   
   const getSelected = ()=>{
     let answer = undefined;

       answersEls.forEach(answersEl =>{
           if (answersEl.checked) {
           answer = answersEl.id;
           } 
       });
        return answer;
   }


   buttons.addEventListener("click", ()=>{
       const answer=getSelected();

       if (answer)
       {  
           if (answer === quizData[currentQuiz].correct) {
               score++;
           }
           currentQuiz++;      
           if (currentQuiz < quizData.length) 
            {
                loadQuiz();
            }
          else
           {
                quiz.innerHTML =`<h2> You anwser correctly at ${score}/${quizData.length} questions.</h2>`
            }
       } 

   })
   /**CALCULATEUR DE RESISTANCE */
   const parallele= document.getElementById("res1");
const serie= document.getElementById("res2");

const type = document.getElementById("type");
const sommes = document.getElementById("sommes");
const inpts= document.querySelectorAll('input[type="text"]');
 
const unites =document.querySelectorAll('#unite');
let somme=0, grandeur = 0;
let som=0,div =0,division=0, grande = 0;

let resistance_count = 2;



serie.addEventListener("click", ()=>{
  type.textContent = "Résistance série";
  valeur.textContent = "Résistance série totale";
  const inputs= document.querySelectorAll('input[type="text"]');
  add.addEventListener("click", ()=>{

    resistance_count = resistance_count + 1;
    
    // on click we will add an input under the last
    const parent_box = document.querySelector(".paralleleContainer");
    const last_box = document.querySelector("#valeur");
    
    const box = document.createElement("div");
    box.id = "resis";
    parent_box.insertBefore(box, last_box);
    
  const labelle = document.createElement("label");
  labelle.id= "resistor_label";
  const text =  document.createTextNode(`R${resistance_count}`)
  labelle.setAttribute("for",`r${resistance_count}`);
  box.appendChild(labelle);
  labelle.appendChild(text);

  const supprime  = document.createElement("button");
  supprime.classList.add("sup");
  supprime.id = "remve";
  supprime.style.marginLeft = "25rem";
  const supprime_text = document.createTextNode('supprimer cette résistance');
  supprime.appendChild(supprime_text);
  labelle.appendChild(supprime);

  const haut_label = document.createElement("br");
  labelle.appendChild(haut_label);

  const inpu = document.createElement("input");
  inpu.setAttribute("type", "text");
  inpu.setAttribute("name", " ");
  inpu.setAttribute("placeholder", "Entrez la valeur de la résistance...")
  inpu.id=`r${resistance_count}`;
  box .appendChild(inpu);
  
  const selections = document.createElement("select");
  selections.id="selectionaly";
  selections.setAttribute("name", "unite");
  selections.setAttribute("class", "united");
  box .appendChild(selections);
  
  const option1 = document.createElement("option");
  option1.setAttribute("value", " ");
  selections .appendChild(option1);
  
  const option2 = document.createElement("option");
  option2.setAttribute("value", "ohms");
  selections .appendChild(option2);
  
  const text1 =  document.createTextNode("Ω")
  option2.appendChild(text1);
  
  const option3 = document.createElement("option");
  option3.setAttribute("name", "kilo");
  selections .appendChild(option3);
  
  const text2 =  document.createTextNode("KΩ")
  option3.appendChild(text2);
  
  const option4 = document.createElement("option");
  option4.setAttribute("value", "mega");
  selections .appendChild(option4);
  
  const text3 =  document.createTextNode("MΩ")
  option4.appendChild(text3);

const selectional =document.querySelectorAll('#selectionaly');
 

selectional.forEach(selectiond=> {
  //console.log(selection.selectedIndex);
 
  selectiond.addEventListener('change',(e)=>{
 
 switch (e.target.options[selectiond.selectedIndex].value) {

   case "ohms":
               grandeur= somme + " Ω";
      break; 

       case "kilo":
           grandeur= somme*1000 + " Ω" ;
          break; 

          case "mega":
           grandeur= somme*1000000 + " Ω";
          break; 

       default:  null;
          break; 
    }
})
});
inpu.addEventListener("blur", ()=>{
      
  somme  += parseFloat(inpu.value);

});

const deletes = document.querySelectorAll("#remve");

deletes.forEach(deleted =>{
    deleted.addEventListener("click", ()=>{
       while ( inpu.id >="r3") {      
            box.remove();
            resistance_count;
            inpu.id = "r2"
        }
    })
})
});

  inputs.forEach(input => {
      input.addEventListener("blur", ()=>{
           somme +=parseFloat(input.value) ;
    });
   
});  

unites.forEach(unite=> {
   
   unite.addEventListener('change',(e)=>{
  
  switch (e.target.options[unite.selectedIndex].value) {

    case "ohms":
                grandeur= somme + " Ω";
       break; 

        case "kilo":
            grandeur= somme*1000 + " Ω" ;
           break; 

           case "mega":
            grandeur= somme*1000000 + " Ω";
           break; 

        default:  null;
           break; 
     }
})
});

valeur.addEventListener("click", ()=>{
    if (!isNaN (somme)){
        sommes.textContent = grandeur;
    }
    else{
        alert("Veuillez entrer un chiffre, en utilisant le . comme séparateur")
    }
})

});
 

parallele.addEventListener("click", ()=>{
    type.textContent = "Résistance parallèle";
    valeur.textContent = "Résistance parallèle totale";
    add.addEventListener("click", ()=>{

        resistance_count = resistance_count + 1;
        
        const parent_box = document.querySelector(".paralleleContainer");
        const last_box = document.querySelector("#valeur");
        
        const box = document.createElement("div");
        box.id = "resis";
        parent_box.insertBefore(box, last_box);
        
        const labelle = document.createElement("label");
      labelle.id= "resistor_label";
      const text =  document.createTextNode(`R${resistance_count}`)
      labelle.setAttribute("for",`r${resistance_count}`);
      
      box.appendChild(labelle);
      labelle.appendChild(text);
      
      const supprime  = document.createElement("button");
      supprime.classList.add("sup");
      supprime.id = "remve";
      supprime.style.marginLeft = "25rem";
      const supprime_text = document.createTextNode('supprimer cette résistance');
      supprime.appendChild(supprime_text);
      labelle.appendChild(supprime);

      const haut_label = document.createElement("br");
      labelle.appendChild(haut_label);

      const inpu = document.createElement("input");
      inpu.setAttribute("type", "text");
      inpu.setAttribute("name", " ");
      inpu.id=`r${resistance_count}`;
      box .appendChild(inpu);
      
      const selections = document.createElement("select");
      selections.id="selectionaly";
      selections.setAttribute("name", "unite");
      selections.setAttribute("class", "united");
      box .appendChild(selections);
      
      const option1 = document.createElement("option");
      option1.setAttribute("value", " ");
      selections .appendChild(option1);
      
      const option2 = document.createElement("option");
      option2.setAttribute("value", "ohms");
      selections .appendChild(option2);
      
      const text1 =  document.createTextNode("Ω")
      option2.appendChild(text1);
      
      const option3 = document.createElement("option");
      option3.setAttribute("name", "kilo");
      selections .appendChild(option3);
      
      const text2 =  document.createTextNode("KΩ")
      option3.appendChild(text2);
      
      const option4 = document.createElement("option");
      option4.setAttribute("value", "mega");
      selections .appendChild(option4);
      
      const text3 =  document.createTextNode("MΩ")
      option4.appendChild(text3);

  const selectional =document.querySelectorAll('#selectionaly');
  
  
  selectional.forEach(selectiond=> {

      selectiond.addEventListener('change',(e)=>{
     
     switch (e.target.options[selectiond.selectedIndex].value) {
  
       case "ohms":
              grande= division + " Ω";
          break; 
  
           case "kilo":
               grande= division*1000 + " Ω" ;
              break; 
   
              case "mega":
               grande= division*1000000 + " Ω";
              break; 
   
           default:  null;
              break; 
        }
   })
   });
   const deletes = document.querySelectorAll("#remve");

deletes.forEach(deleted =>{
    deleted.addEventListener("click", ()=>{
       while ( inpu.id >="r3") {      
            box.remove();
            inpu.id = "r2";
            resistance_count = 2 ;
        }
    })
})

  inpu.addEventListener("blur", ()=>{    
      som += parseFloat(1/inpu.value);
      div =(1/som).toFixed(5);
      division = parseFloat(div)
      console.log(division)
  });
  })
    inpts.forEach(inpt => {
        inpt.addEventListener("blur", ()=>{
            som += parseFloat(1/inpt.value);
            div =(1/som).toFixed(5);
            division = parseFloat(div)
      }); 
  });

  unites.forEach(unite=> {
  // console.log(unite)
    unite.addEventListener('change',(e)=>{
   
   switch (e.target.options[unite.selectedIndex].value) {
 
     case "ohms":
         grande= division + " Ω";
         console.log(grande)
        break; 
 
         case "kilo":
             grande= division*1000 + " Ω" ;
            break; 
 
            case "mega":
             grande= division*1000000 + " Ω";
            break; 
 
         default:  null;
            break; 
      }
 });
 });

  valeur.addEventListener("click", ()=>{
   sommes.textContent = grande;
});

});

/*EMOJI DYNAMIQUE*/  
document.body.addEventListener('mousemove',(e)=>{
    let eyes =document.querySelectorAll(".eye");
   
     eyes.forEach(eye =>{
         
         let x =(eye.getBoundingClientRect().left) + (eye.clientWidth/2);
         let y =(eye.getBoundingClientRect().top) + (eye.clientHeight/2);

         let radian = Math.atan2(event.pageX - x, event.pageY -y);
         let rot =(radian * (180/Math.PI)* -1 + 270);
         eye.style.transform = "rotate(" + rot + "deg)"
     }) ;
})