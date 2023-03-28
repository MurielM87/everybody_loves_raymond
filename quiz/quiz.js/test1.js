
//HTML dynamique
const clickEvent = document.createElement("div");
document.getElementById("test").appendChild(clickEvent);
clickEvent.setAttribute("class", "click-event");

const title = document.createElement("h4");
clickEvent.appendChild(title);

//creation HTML question 1 - boutons couleurs
let ques1res1 = document.createElement("button");
clickEvent.appendChild(ques1res1);
ques1res1.setAttribute("id", "btn_color1");
ques1res1.innerText = "bleu";
let ques1res2 = document.createElement("button");
clickEvent.appendChild(ques1res2);
ques1res2.setAttribute("id", "btn_color2");
ques1res2.innerText = "rouge";
let ques1res3 = document.createElement("button");
clickEvent.appendChild(ques1res3);
ques1res3.setAttribute("id", "btn_color3");
ques1res3.innerText = "vert";
let ques1res4 = document.createElement("button");
clickEvent.appendChild(ques1res4);
ques1res4.setAttribute("id", "btn_color4");
ques1res4.innerText = "jaune";
let ques1res5 = document.createElement("button");
clickEvent.appendChild(rques1res5);
ques1res5.setAttribute("id", "btn_color5");
ques1res5.innerText = "orange";
let ques1res6 = document.createElement("button");
clickEvent.appendChild(ques1res6);
ques1res6.setAttribute("id", "btn_color6");
ques1res6.innerText = "violet";

//creations balises question 2 

/*SELECTEURS - injecter du style à partir du js
document.querySelector("h3").style.background = "yellow";

const titreQuestion = document.querySelector("h3");
console.log(titreQuestion);
titreQuestion.style.background = "yellow"; */

//click event
const questionContainer = document.querySelector('.click-event');

console.log(questionContainer);
//questionContainer.style.borderRadius = "150px";

questionContainer.addEventlistner('click', () => {
    //console.log("Click!") pour vérifier, puis ne pas forcément laisser dans le code
    //questionContainer.style.background="red"; //changement background au click
    //questionContainer.style.border="3px solid yellow";
    questionContainer.classList.toogle("quiz_clicked");
});


//
const btn1 = document.querySelector("#btn_1");
const btn2 = document.getElementById("btn_2");
const response = document.querySelector('p') ;

console.log(response);

btn1.addEventlistner('click', () => {
    console.log("Click!"); //à supprimer
    response.style.visibility = "visibile" ;
    response.style.background = "green"
});

btn2.addEventlistner('click', () => {
    console.log("Click!"); //à supprimer
    response.style.visibility = "visibile" ;
    response.style.background = "green"
});
