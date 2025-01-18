// Função para ler o valor em Real
function lerValorEmReal() {
    const valor = parseFloat(prompt("Digite o valor em Real (R$):"));
    if (isNaN(valor) || valor < 0) {
        alert("Por favor, insira um valor válido em Real.");
        return null;
    }
    return valor;
}

// Função para realizar a conversão para Dólar
function converterParaDolar(valorEmReal, taxaDeCambio) {
    return valorEmReal / taxaDeCambio;
}

// Função para exibir o resultado
function exibirResultadoConversao(valorEmReal, valorEmDolar, taxaDeCambio) {
    alert(`O valor de R$${valorEmReal.toFixed(2)} convertido para Dólar é: $${valorEmDolar.toFixed(2)} (Taxa de câmbio: ${taxaDeCambio}).`);
}

// Função principal
function main() {
    // Taxa de câmbio (valor do Dólar em Reais)
    const taxaDeCambio = parseFloat(prompt("Digite a taxa de câmbio atual (valor do Dólar em Reais):"));
    if (isNaN(taxaDeCambio) || taxaDeCambio <= 0) {
        alert("Por favor, insira uma taxa de câmbio válida.");
        return;
    }

    // Lê o valor em Real
    const valorEmReal = lerValorEmReal();
    if (valorEmReal === null) {
        return;
    }

    // Converte para Dólar
    const valorEmDolar = converterParaDolar(valorEmReal, taxaDeCambio);

    // Exibe o resultado
    exibirResultadoConversao(valorEmReal, valorEmDolar, taxaDeCambio);
}

// Chama a função principal
main();
