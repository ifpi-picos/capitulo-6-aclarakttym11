// Solicitar três números ao usuário
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const num3 = parseFloat(prompt("Digite o terceiro número:"));

// Função para calcular a média de três números
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

// Calcular a média
const media = calcularMedia(num1, num2, num3);

// Arredondar a média para duas casas decimais
const mediaArredondada = media.toFixed(2);

// Exibir o resultado no console
console.log(`A média dos números é: ${mediaArredondada}`);