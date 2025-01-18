function exemploEscopoBloco() {
    
   
    if (true) {
            let blocoVar = "Eu sou uma variável de bloco!";
            
 
    console.log(blocoVar); // Acessível dentro do bloco
        }
    
    // Tentando acessar a variável fora do bloco
       
    console.log(typeof blocoVar); // Verifica o tipo (deve ser "undefined" fora do bloco)
    }
    
    // Chamando a função
    exemploEscopoBloco();