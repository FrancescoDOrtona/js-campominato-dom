// #Campo Minato

// Funzioni
function boxBgOnClick() {
    this.classList.add('bg-azure');
    console.log('La casella ha il numero:' + this.innerHTML)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function getArrayOfRandomBetween (min, max, range){
    const bombsArray = [];

    while (bombsArray.length < range){
        const randomNumber =  getRandomIntInclusive(min,max);
        if (bombsArray.includes(randomNumber) === false){
            bombsArray.push(randomNumber);
        }
    }
    return bombsArray
}

function counterIncrement(counter){
    counter = counter + 1;
    return counter
}


// Variabili
const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement)
const playBtnDOMElement = document.querySelector('.play-btn');
const difficultyDOMElement = document.getElementById('difficulty');
console.log(difficultyDOMElement);
const scoreCounterDOMElement = document.querySelector('.score__counter')
// console.log(scoreCounterDOMElement)


//  Ciclo for per creare ed inserire gli elementi nel DOM
playBtnDOMElement.addEventListener('click', function(){

    gridDOMElement.innerHTML = '';
    let counter = 0;
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

    //  array delle bombe
    const bombArray = getArrayOfRandomBetween(1, difficultyLevel, 16);
    console.log(bombArray);

    for (let i = 0; i < difficultyLevel; i++){
        const n = (i + 1);
    
        const boxDOMElement = `<div class="box">${n}</div>`;
        // console.log(boxDOMElement);
    
        gridDOMElement.innerHTML += boxDOMElement;  
    }

    // Recupero le caselle dal DOM
    const boxDOMElements = document.querySelectorAll('.box');
    // console.log(boxDOMElements);
    
    // Creo un ciclo per poi prendere ogni casella del DOM singolarmente
    for (let i = 0; i < boxDOMElements.length; i++){

        const currentBoxDOMElement = boxDOMElements[i]
        // console.log(currentBoxDOMElement)

        currentBoxDOMElement.addEventListener('click', function(){
            const boxNumber = parseInt(currentBoxDOMElement.innerHTML)
            console.log(boxNumber,typeof(boxNumber))
            // let counter = parseInt(scoreCounterDOMElement.innerHTML) 

            if(bombArray.includes(boxNumber)){
                currentBoxDOMElement.classList.add('bg-red');
                alert('Game Over');               
            } else{ 
                currentBoxDOMElement.classList.add('bg-azure');
                counter = counterIncrement(counter);               
                scoreCounterDOMElement.innerHTML = counter;
                console.log(counter);                    
            }
                
            if (counter === (difficultyLevel - 16)) {
                alert('Hai vinto')
            }                                                                                                                  
        });       
    }
})