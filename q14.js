 //Função para calcular o IMC e classificar
 function calcularIMC() {
    //Solicita a altura e o peso ao usuario
    let peso = parseFloat(prompt("digite seu peso em kg:"));
    let altura = parseFloat(prompt("digite sua altura em metros:"));
     //verifica se os  valores são validos 
     if(peso <= 0 || altura<= 0) {
        alert("Por favor, insira valores validos para peso e altura.");
        return;//sai da função caso os valores sejam invalidos

     }
     //calcule o IMC
     let imc = peso / (altura * altura);
     //exibe o valor do IMC
     alert("seu IMC é:"+imc.toFixed(2));
     //classificação do IMC usando a instrução switch
     switch (true) {
        case (imc < 18.5):
            alert("classificação: abaixo do peso");
            break;
            case(imc >= 18.5 && imc < 24.9):
            alert("classificação: peso normal");
            break;
            case( imc >= 25 && imc <29.9):
            alert("classificação:sobrepeso")
            break;
            case( imc>=30):
            alert("classificação: obesidade");
            break;
        default: 
           alert("erro na classificação do IMC.");
           break;
     }
    }
    //Chama a função para calcular o IMC e classificar
    calcularIMC();