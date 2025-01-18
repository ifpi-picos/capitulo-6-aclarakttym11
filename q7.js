// Variável global
let globalVar = "Eu sou global!";

function exemploEscopo() {
    // Variável local
    let localVar = "Eu sou local!";
    

    console.log(globalVar); // Acessa a variável global
   
    console.log(localVar);  // Acessa a variável local
}
// Chamando a função
     exemploEscopo();

// Tentando acessar as variáveis fora da função

console.log(globalVar); // Acessível, porque é global

console.log(typeof localVar);//undefined