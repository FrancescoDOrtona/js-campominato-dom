// #Campo Minato

// Funzioni
function boxBgOnClick() {
    this.classList.add('bg-azure');
    console.log('La casella ha il numero:' + this.innerHTML)
}

// Variabili
const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement)
const playBtnDOMElement = document.querySelector('.play-btn');
const difficultyDOMElement = document.getElementById('difficulty');
console.log(difficultyDOMElement);



//  Ciclo for per creare ed inserire gli elementi nel DOM
playBtnDOMElement.addEventListener('click', function(){

    gridDOMElement.innerHTML = '';
    document.querySelector('.grid').classList.remove('grid-easy', 'grid-medium', 'grid-hard');

    // Livello di difficoltà
    const difficultyValue = parseInt(difficultyDOMElement.value);
    console.log(typeof(difficultyValue), difficultyValue);

    let difficultyLevel;
    if (difficultyValue === 0){
        difficultyLevel = 100;
        gridDOMElement.classList.add('grid-easy');
     }  else if (difficultyValue === 1){
         difficultyLevel = 81;
         gridDOMElement.classList.add('grid-medium');
     } else if (difficultyValue === 2){
         difficultyLevel = 49;
         gridDOMElement.classList.add('grid-hard');
     }
     console.log(difficultyLevel)

    for (let i = 0; i < difficultyLevel; i++){
        const n = (i + 1);
    
        const boxDOMElement = `<div class="box">${n}</div>`;
        console.log(boxDOMElement);
    
        gridDOMElement.innerHTML += boxDOMElement;  
    }

    // Recupero le caselle dal DOM
    const boxDOMElements = document.querySelectorAll('.box');
    console.log(boxDOMElements);
    
    // Creo un ciclo per poi prendere ogni casella del DOM singolarmente
    for (let i = 0; i < boxDOMElements.length; i++){

        const currentBoxDOMElement = boxDOMElements[i]
        console.log(currentBoxDOMElement)

        currentBoxDOMElement.addEventListener('click', boxBgOnClick);       
    }
})