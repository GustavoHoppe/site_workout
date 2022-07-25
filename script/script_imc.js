const botao = document.querySelector('.container__botao')
const res = document.querySelector('.container__resposta');

function calculaImc() {

    const peso = document.querySelector('#txt_peso').value;
    const altura = document.querySelector('#txt_altura').value;
    const imc = peso / (altura * altura);
    
    if (imc < 18.5) {
    
        res.innerHTML = `<p class="resposta__texto"> Seu IMC é <strong class="strong__titulo">${imc.toFixed(2)}</strong> = <strong class= "peso--abaixo"> Abaixo do peso</strong></p>`;

        res.innerHTML += `<p>Abaixo de 18 = <strong class= "peso--abaixo"> Abaixo do peso</strong></p></p>
        <p>18.5 - 24.9 = <strong class= "peso--normal">Normal</strong></p>
        <p>25 - 29.9 = <strong class= "peso--sobrepeso">Sobrepeso</strong></p>
        <p>30 - 34.9 = <strong class= "peso--obesidade1">Obesidade Grau I</strong></p>
        <p>35 - 39.9 = <strong class= "peso--obesidade2">Obesidade Grau II</strong></p>
        <p>Acima de 40 = <strong class= "peso--obesidade3">Obesidade Grau III</strong></p>`
    
    } else if (imc >= 18.5 && imc <= 24.9) {
        
        res.innerHTML = `<p class="resposta__texto"> Seu IMC é <strong class="strong__titulo">${imc.toFixed(2)}</strong> = <strong class= "peso--normal">Normal</strong></p>`;

        res.innerHTML += `<p>Abaixo de 18 = <strong class= "peso--abaixo"> Abaixo do peso</strong></p></p>
        <p>18.5 - 24.9 = <strong class= "peso--normal">Normal</strong></p>
        <p>25 - 29.9 = <strong class= "peso--sobrepeso">Sobrepeso</strong></p>
        <p>30 - 34.9 = <strong class= "peso--obesidade1">Obesidade Grau I</strong></p>
        <p>35 - 39.9 = <strong class= "peso--obesidade2">Obesidade Grau II</strong></p>
        <p>Acima de 40 = <strong class= "peso--obesidade3">Obesidade Grau III</strong></p>`
    
    } else if (imc >= 25 && imc <= 29.9) {
        
        res.innerHTML = `<p class="resposta__texto"> Seu IMC é <strong class="strong__titulo">${imc.toFixed(2)}</strong> = <strong class= "peso--sobrepeso">Sobrepeso</strong></p>`;

        res.innerHTML += `<p>Abaixo de 18 = <strong class= "peso--abaixo"> Abaixo do peso</strong></p></p>
        <p>18.5 - 24.9 = <strong class= "peso--normal">Normal</strong></p>
        <p>25 - 29.9 = <strong class= "peso--sobrepeso">Sobrepeso</strong></p>
        <p>30 - 34.9 = <strong class= "peso--obesidade1">Obesidade Grau I</strong></p>
        <p>35 - 39.9 = <strong class= "peso--obesidade2">Obesidade Grau II</strong></p>
        <p>Acima de 40 = <strong class= "peso--obesidade3">Obesidade Grau III</strong></p>`
    
    } else if (imc >= 30 && imc <= 34.9) {
        
        res.innerHTML = `<p class="resposta__texto"> Seu IMC é <strong class="strong__titulo">${imc.toFixed(2)}</strong> = <strong class= "peso--obesidade1"> Obesidade Grau I</strong></p>`;

        res.innerHTML += `<p>Abaixo de 18 = <strong class= "peso--abaixo"> Abaixo do peso</strong></p></p>
        <p>18.5 - 24.9 = <strong class= "peso--normal">Normal</strong></p>
        <p>25 - 29.9 = <strong class= "peso--sobrepeso">Sobrepeso</strong></p>
        <p>30 - 34.9 = <strong class= "peso--obesidade1">Obesidade Grau I</strong></p>
        <p>35 - 39.9 = <strong class= "peso--obesidade2">Obesidade Grau II</strong></p>
        <p>Acima de 40 = <strong class= "peso--obesidade3">Obesidade Grau III</strong></p>`
    
    } else if (imc >= 35 && imc <= 39.9) {

        res.innerHTML = `<p class="resposta__texto"> Seu IMC é <strong class="strong__titulo">${imc.toFixed(2)}</strong> = <strong class= "peso--obesidade2">Obesidade Grau II</strong></p>`;

        res.innerHTML += `<p>Abaixo de 18 = <strong class= "peso--abaixo"> Abaixo do peso</strong></p></p>
        <p>18.5 - 24.9 = <strong class= "peso--normal">Normal</strong></p>
        <p>25 - 29.9 = <strong class= "peso--sobrepeso">Sobrepeso</strong></p>
        <p>30 - 34.9 = <strong class= "peso--obesidade1">Obesidade Grau I</strong></p>
        <p>35 - 39.9 = <strong class= "peso--obesidade2">Obesidade Grau II</strong></p>
        <p>Acima de 40 = <strong class= "peso--obesidade3">Obesidade Grau III</strong></p>`
    
    } else if (imc > 40) {

        res.innerHTML = `<p class="resposta__texto"> Seu IMC é <strong class="strong__titulo">${imc.toFixed(2)}</strong> = <strong class= "peso--obesidade3">Obesidade Grau III</strong></p>`;

        res.innerHTML += `<p>Abaixo de 18 = <strong class= "peso--abaixo"> Abaixo do peso</strong></p></p>
        <p>18.5 - 24.9 = <strong class= "peso--normal">Normal</strong></p>
        <p>25 - 29.9 = <strong class= "peso--sobrepeso">Sobrepeso</strong></p>
        <p>30 - 34.9 = <strong class= "peso--obesidade1">Obesidade Grau I</strong></p>
        <p>35 - 39.9 = <strong class= "peso--obesidade2">Obesidade Grau II</strong></p>
        <p>Acima de 40 = <strong class= "peso--obesidade3">Obesidade Grau III</strong></p>`
    }

    if (peso.length == 0) {
        alert("ERRO! Digite seu peso e tente novamente!");
        
    } else if (altura.length == 0) {
        alert("ERRO! Digite sua altura e tente novamente!");
        
    }
   
}

botao.onclick = calculaImc;

console.log(peso);
console.log(altura);






