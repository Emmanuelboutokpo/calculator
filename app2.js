const couleurs=[
    {
         noir :0,
         marron : 1,
         rouge : 2,
         orange : 3,
         jaune : 4,
         vert : 5,
         bleu : 6, 
         violet :7,
         gris : 8,  
         blanc : 9
    },

    {
        argent :  0.01,
        or        :  0.1,
        noir :      1,
        marron : 10,
        rouge :   100,
        orange : 1000,
        jaune :   10000,
        vert :     100000,
        bleu :    1000000, 
        violet : 10000000,
   },

   {
    argent :   0.1,
    or        :  0.05,
    noir :      0.2,
    marron : 0.01,
    rouge :   0.02,
    vert :  0.005 ,
    bleu :   0.0025,
    violet :     0.001,
    gris :    0.0005, 
},

   {
    marron : 100,
    rouge : 50,
    orange : 15,
    jaune : 25,
    bleu : 10, 
    violet :5, 
    blanc : 1
}
];
const fun = 0; 
const funny = couleurs.forEach(couleur => {
    console.log(couleur)
});

const update_color = (anneau,tag,idx, id, colors, color)=>{
    tag= document.getElementById(idx);
    anneau = document.querySelector(id);
    console.log(anneau)
    if (anneau.id === "fi_chiffre"){
       const fun = 0; 
       const funny = couleurs.forEach(couleur => {
           console.log(couleur)
       });
       let inc;
    }
}    
       /*anneau.addEventListener('change',(e)=>{ 
           if (e.target.options[anneau.selectedIndex].value === "noir") {
                 tag.classList.remove("a");
                 tag.classList.add("noir");
                const ind =  anneau.selectedIndex;
                 inc = funny * ind;
                 console.log(inc)
              } else if (e.target.options[anneau.selectedIndex].value === "marron") {
                tag.classList.remove("a");
                tag.classList.add("marron");
               const ind =  anneau.selectedIndex;
                inc = funny * ind;
                console.log(inc)
              }
           
           })
           clear.addEventListener("click", (e)=>{
               anneau = document.querySelector(id);
               anneau.selectedIndex = 0;
               tag.classList.remove(color);
              tag.classList.add(idx);
      })   
    }
}

update_color("chiffre","a_text","a","#fi_chiffre","marron","marron");
update_color("chiffre","a_text","a","#fi_chiffre","rouge","rouge");*/
/*update_color("chiffre","a_text","a","#fi_chiffre","orange","orange");
update_color("chiffre","a_text","a","#fi_chiffre","jaune","jaune");
update_color("chiffre","a_text","a","#fi_chiffre","vert","vert");
update_color("chiffre","a_text","a","#fi_chiffre","bleu","bleu");
update_color("chiffre","a_text","a","#fi_chiffre","violet","violet");
update_color("chiffre","a_text","a","#fi_chiffre","gris","gris");
update_color("chiffre","a_text","a","#fi_chiffre","blanc","blanc");*/
 /*
update_color("chiffre1","b_text","b","#se_chiffre","noir","noi");
update_color("chiffre1","b_text","b","#se_chiffre","marron","marro");
/*update_color("chiffre1","b_text","b","#se_chiffre","rouge","roug");
update_color("chiffre1","b_text","b","#se_chiffre","orange","orang");
update_color("chiffre1","b_text","b","#se_chiffre","jaune","jaun");
update_color("chiffre1","b_text","b","#se_chiffre","vert","ver");
update_color("chiffre1","b_text","b","#se_chiffre","bleu","ble");
update_color("chiffre1","b_text","b","#se_chiffre","violet","viole");
update_color("chiffre1","b_text","b","#se_chiffre","gris","gri");
update_color("chiffre1","b_text","b","#se_chiffre","blanc","blan");*/
 /*
update_color("chiffre2","c_text","c","#t_chiffre","noir","noi");
update_color("chiffre2","c_text","c","#t_chiffre","marron","marro");
/*update_color("chiffre2","c_text","c","#t_chiffre","rouge","roug");
update_color("chiffre2","c_text","c","#t_chiffre","orange","orang");
update_color("chiffre2","c_text","c","#t_chiffre","jaune","jaun");
update_color("chiffre2","c_text","c","#t_chiffre","vert","ver");
update_color("chiffre2","c_text","c","#t_chiffre","bleu","ble");
update_color("chiffre2","c_text","c","#t_chiffre","violet","viole");
update_color("chiffre2","c_text","c","#t_chiffre","gris","gri");
update_color("chiffre2","c_text","c","#t_chiffre","blanc","blan");2
*//*
update_color("chiffre3","d_text","d","#multiple","argent","argent");
update_color("chiffre3","d_text","d","#multiple","or","or");
/*update_color("chiffre3","d_text","d","#multiple","noir","no");
update_color("chiffre3","d_text","d","#multiple","marron","marr");
update_color("chiffre3","d_text","d","#multiple","rouge","rou");
update_color("chiffre3","d_text","d","#multiple","orange","oran");
update_color("chiffre3","d_text","d","#multiple","jaune","jau");
update_color("chiffre3","d_text","d","#multiple","vert","ve");
update_color("chiffre3","d_text","d","#multiple","bleu","bl");
update_color("chiffre2","d_text","d","#multiple","violet","viol");*/
/*
update_color("chiffre4","e_text","e","#tolerance","argent","argen");
update_color("chiffre4","e_text","e","#tolerance","or","org");
/*update_color("chiffre4","e_text","e","#tolerance","noir","noi");
update_color("chiffre4","e_text","e","#tolerance","marron","marro");
update_color("chiffre4","e_text","e","#tolerance","rouge","roug");
update_color("chiffre4","e_text","e","#tolerance","vert","ver");
update_color("chiffre4","e_text","e","#tolerance","bleu","ble");
update_color("chiffre4","e_text","e","#tolerance","violet","viole");
update_color("chiffre4","e_text","e","#tolerance","gris","gri");*/
/*
update_color("chiffre5","f_text","f","#coef","marron","marro");
update_color("chiffre5","f_text","f","#coef","rouge","roug");
/*update_color("chiffre5","f_text","f","#coef","orange","orang");
update_color("chiffre5","f_text","f","#coef","jaune","jaun");
update_color("chiffre5","f_text","f","#coef","bleu","ble");
update_color("chiffre5","f_text","f","#coef","violet","viole");
update_color("chiffre5","f_text","f","#coef","blanc","blan");*/


/*
const a_text = document.getElementById("a");
const b_text = document.getElementById("b");
const c_text = document.getElementById("c");
const d_text = document.getElementById("d");
const e_text = document.getElementById("e");
const f_text = document.getElementById("f");

const update_color = ()=>{
     const chiffre = document.querySelector("#fi_chiffre");
     chiffre.addEventListener('change',(e)=>{
        switch (e.target.options[chiffre.selectedIndex].value) {
            case "noir":
               break;
        
               case "marron":
                    a_text.classList.add("marron");
                    a_text.classList.remove("a");
                 break;

                 case "rouge":
                   a_text.classList.add("rouge");
                   a_text.classList.remove("a");
                 break; 

                 case "orange":
                      a_text.classList.add("orange");
                      a_text.classList.remove("a");
                 break;

                 case "jaune":
                      a_text.classList.add("jaune");
                      a_text.classList.remove("a");
                 break;
                 
                 case "vert":
                      a_text.classList.add("vert");
                     a_text.classList.remove("a");
                 break;
                 
                 case "bleu":
                      a_text.classList.add("bleu");
                     a_text.classList.remove("a");
                 break;
                 
                 case "violet":
                      a_text.classList.add("violet");
                     a_text.classList.remove("a");
                 break;
                 
                 case "gris":
                       a_text.classList.add("gris");
                      a_text.classList.remove("a");
                 break;
                 
                 case "blanc":
                      a_text.classList.add("blanc");
                     a_text.classList.remove("a");
                 break;
                
            default:  null;
               break;
         }
         console.log(e.target.options[chiffre.selectedIndex].value)
     })
     const chiffre1 = document.querySelector("#se_chiffre");
     chiffre1.addEventListener('change',(e)=>{
         console.log(e.target.options[chiffre1.selectedIndex].value)
     })
     const chiffre2 = document.querySelector("#t_chiffre");
     chiffre2.addEventListener('change',(e)=>{
         console.log(e.target.options[chiffre2.selectedIndex].value)
     })
     const chiffre3 = document.querySelector("#multiple");
     chiffre3.addEventListener('change',(e)=>{
         console.log(e.target.options[chiffre3.selectedIndex].value)
     })
     const chiffre4 = document.querySelector("#tolerance");
     chiffre4.addEventListener('change',(e)=>{
         console.log(e.target.options[chiffre4.selectedIndex].value)
     })
  
     const chiffres = document.querySelector("#coef");
     chiffres.addEventListener('change',(e)=>{
         console.log(e.target.options[chiffres.selectedIndex].value)
     })
 }*/
