// Função para realizar a adição de dois números
function adicionar(numero1, numero2) {
    return numero1 + numero2;
}

// Função para realizar a subtração de dois números
function subtrair(numero1, numero2) {
    return numero1 - numero2;
}

// Função para realizar a multiplicação de dois números
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

// Função para realizar a divisão de dois números
function dividir(numero1, numero2) {
    if (numero2 === 0) {
        return "Erro: divisão por zero não é permitida.";
    }
    return numero1 / numero2;
}

// Função para exibir o resultado
function exibirResultado(operacao, numero1, numero2, resultado) {
    alert(`O resultado da ${operacao} entre ${numero1} e ${numero2} é: ${resultado}`);
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

    // Solicita a operação ao usuário
    const operacao = prompt("Escolha a operação: adição, subtração, multiplicação ou divisão").toLowerCase();

    let resultado;
    switch (operacao) {
        case "adição":
            resultado = adicionar(numero1, numero2);
            exibirResultado("adição", numero1, numero2, resultado);
            break;
        case "subtração":
            resultado = subtrair(numero1, numero2);
            exibirResultado("subtração", numero1, numero2, resultado);
            break;
        case "multiplicação":
            resultado = multiplicar(numero1, numero2);
            exibirResultado("multiplicação", numero1, numero2, resultado);
            break;
        case "divisão":
            resultado = dividir(numero1, numero2);
            exibirResultado("divisão", numero1, numero2, resultado);
            break;
        default:
            alert("Operação inválida. Por favor, escolha entre adição, subtração, multiplicação ou divisão.");
    }
}

// Chama a função principal
main();
