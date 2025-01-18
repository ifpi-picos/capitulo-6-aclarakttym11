// Função para calcular a média de dois números
function calcularMedia(numero1, numero2) {
    return (numero1 + numero2) / 2;
}

// Função principal
function main() {
    // Solicita os números ao usuário
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));

    // Verifica se os valores são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira apenas números válidos.");
        return;
    }

    // Calcula a média
    const media = calcularMedia(numero1, numero2);

    // Exibe o resultado
    alert(`A média dos números ${numero1} e ${numero2} é ${media}.`);
}

// Chama a função principal
main();