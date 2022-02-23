/*SELECTEURS - injecter du style à partir du js
document.querySelector("h3").style.background = "yellow";

const titreQuestion = document.querySelector("h3");
console.log(titreQuestion);
titreQuestion.style.background = "yellow"; */

//click event
const questionContainer = document.querySelector('.click-event');

console.log(questionContainer);
//questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener('click', () => {
    //console.log("Click!") pour vérifier, puis ne pas forcément laisser dans le code
    //questionContainer.style.background="red"; //changement background au click
    //questionContainer.style.border="3px solid yellow";
    questionContainer.classList.toogle("quiz_clicked");
});

const btn1 = document.querySelector("#btn_1");
const btn2 = document.getElementById("btn_2");
const response = document.querySelector('p') ;

console.log(response);

btn1.addEventListener('click', () => {
    console.log("Click!"); //à supprimer
    response.style.visibility = "visibile" ;
    response.style.background = "green"
});

btn2.addEventListener('click', () => {
    console.log("Click!"); //à supprimer
    response.style.visibility = "visibile" ;
    response.style.background = "green"
});
