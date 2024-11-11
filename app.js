alert("Boas-vindas ao jogo do número secreto") 
let numeroSecreto = 88; 
let chute = prompt("Escolha um número entre 1 e 100"); 

while(  chute!== numeroSecreto){
    if(chute == numeroSecreto){ 
        console.log(`Isso aí, você descobriu o número secreto ${numeroSecreto}`);
     } 
     else {

        alert("Você errou!")
     }
    
    }