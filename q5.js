// Função para calcular a média de três números
function calcularMedia(num1, num2, num3) {
    // Calcula a média
    const media = (num1 + num2 + num3) / 3;

    // Exibe o resultado no console
    console.log(`A média dos números ${num1}, ${num2}, e ${num3} é: ${media.toFixed(2)}`);
}

// Chamando a função com três números de exemplo
   calcularMedia(30,20,10);
