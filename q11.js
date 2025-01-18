 // Gera um número aleatório entre 1 e 100
 const numeroSecreto = Math.floor(Math.random() * 100) + 1;
 let tentativas = 10;
 let acertou = false;
 
 console.log("Bem-vindo ao jogo de adivinhação!");
 
 // Loop para as tentativas do usuário
 while (tentativas > 0 && !acertou) {
     let palpite = parseInt(prompt("Você tem ${10} tentativa(s). Adivinhe o número (entre 1 e 100):"));
 
     // Verifica se o palpite é válido
     if (isNaN(palpite) || palpite < 1 || palpite > 100) {
         alert("Por favor, insira um número válido entre 1 e 100.");
         continue;
     }
 
     if (palpite === numeroSecreto) {
         alert("Parabéns! Você acertou o número secreto: ${numeroSecreto}.");
         acertou = true;
     } else if (palpite < numeroSecreto) {
         alert("O número secreto é maior!");
     } else {
         alert("O número secreto é menor!");
     }
 
     tentativas--;
 }
 
 // Caso o jogador não acerte dentro das tentativas
 if (!acertou) {
     alert("Que pena! Suas tentativas acabaram. O número secreto era: ${numeroSecreto}.");
 }