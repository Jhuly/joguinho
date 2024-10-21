alert("Boas-Vindas ao jogo Número Secreto");
 let numeroSecreto = 88; let chute; let tentativa = 1; 
 while (chute != numeroSecreto)
    { chute = prompt("Escolha um número entre 1 e 100 "); if (chute == numeroSecreto)
    { console.log(`Isso aí!! Você descobriu o Número Secreto $
{numeroSecreto} com ${tentativa} tentaviva(as)`)} else 
{ if(numeroSecreto> chute) {alert (`O numero secreto é maior que ${chute}`);}
 else{alert (`O numero secreto é menor que ${chute}`);} } tentativa++; }