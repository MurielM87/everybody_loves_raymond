
//HTML dynamique
const clickEvent = document.createElement("div");
document.getElementById("test").appendChild(clickEvent);
clickEvent.setAttribute("class", "click-event");

const title = document.createElement("h4");
clickEvent.appendChild(title);

//creation HTML boutons couleurs
let response1 = document.createElement("button");
clickEvent.appendChild(response1);
response1.setAttribute("id", "btn_color1");
response1.innerText = "bleu";
let response2 = document.createElement("button");
clickEvent.appendChild(response2);
response2.setAttribute("id", "btn_color2");
response2.innerText = "rouge";
let response3 = document.createElement("button");
clickEvent.appendChild(response3);
response3.setAttribute("id", "btn_color3");
response3.innerText = "vert";
let response4 = document.createElement("button");
clickEvent.appendChild(response4);
response4.setAttribute("id", "btn_color4");
response4.innerText = "jaune";
let response5 = document.createElement("button");
clickEvent.appendChild(response5);
response5.setAttribute("id", "btn_color5");
response5.innerText = "orange";
let response6 = document.createElement("button");
clickEvent.appendChild(response6);
response6.setAttribute("id", "btn_color6");
response6.innerText = "violet";


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
