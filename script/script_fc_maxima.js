const botaoCalc = document.querySelector('.container__botao');
const res = document.querySelector('.container__resposta') 

botaoCalc.onclick = function () {

    const idade = parseInt(document.querySelector('#txt_idade').value);
    
    const fcMax = 220 - idade;
    const idade50 = fcMax * 50 / 100;
    const idade60 = fcMax * 60 / 100;
    const idade70 = fcMax * 70 / 100;
    const idade80 = fcMax * 80 / 100;
    const idade90 = fcMax * 90 / 100;
    
    res.innerHTML = `<p class="resposta__texto"><span class="container__lista__estilo">3.</span> Abaixo está o resultado de sua <strong class="strong__titulo">frequência cardíaca máxima</strong>, logo após estão informações de cada zona alvo. Escolha sua zona alvo de acordo com seu objetivo.</p>`;
    
    res.innerHTML += `<p class="resposta__fc">Sua frequência cardíaca máxima é <strong class="strong__titulo">${fcMax} bpm.</strong></p>`
    
    res.innerHTML += `<h2 class="resposta__titulo"> <strong class="fc--50-60">Muito leve</strong> </h2>
    <p class="resposta__fc2"><strong class="strong__titulo">${idade50} bpm - ${idade60} bpm</strong></p>
    <p><strong class="strong__titulo">Benefícios:</strong> Otimização do metabolismo.<br>
    <strong class="strong__titulo">Sensação:</strong> Respiração muito fácil, e sem esforço muscular significativo.<br>
    <strong class="strong__titulo">Recomendado para:</strong> Iniciantes, retorno de atividades após período ocioso, recuperação de treinos exaustivos ou aquecimentos.</p>`

    res.innerHTML += `<h2 class="resposta__titulo"> <strong class="fc--60-70">Leve</strong> </h2>
    <p class="resposta__fc2"><strong class="strong__titulo">${idade60} bpm - ${idade70} bpm</strong></p>
    <p><strong class="strong__titulo">Benefícios:</strong> Melhorar o condicionamento aeróbico e indicado para perda de peso.<br>
    <strong class="strong__titulo">Sensação:</strong> Confortável, respiração fácil, baixa sobrecarga muscular.<br>
    <strong class="strong__titulo">Recomendado para:</strong> Maioria das atividades prolongadas e frequentes.</p>`

    res.innerHTML += `<h2 class="resposta__titulo"> <strong class="fc--70-80">Moderado</strong> </h2>
    <p class="resposta__fc2"><strong class="strong__titulo">${idade70} bpm - ${idade80} bpm</strong></p>
    <p><strong class="strong__titulo">Benefícios:</strong> Condicionamento aeróbico, vigor físico. Ideal para ganhos em resistência.<br>
    <strong class="strong__titulo">Sensação:</strong> Fadiga Muscular leve e frequência respiratória aumentada.<br>
    <strong class="strong__titulo">Recomendado para:</strong> Maioria das atividades que nescessitam resistência.</p>`

    res.innerHTML += `<h2 class="resposta__titulo"> <strong class="fc--80-90">Difícil</strong> </h2>
    <p class="resposta__fc2"><strong class="strong__titulo">${idade80} bpm - ${idade90} bpm</strong></p>
    <p><strong class="strong__titulo">Benefícios:</strong> Incrementos no Vo2 máximo e otimização na performance.<br>
    <strong class="strong__titulo">Sensação:</strong> Fadiga Muscular intensa e respiração ofegante.<br>
    <strong class="strong__titulo">Recomendado para:</strong> Atletas bem preparados e por períodos curtos.</p>`

    res.innerHTML += `<h2 class="resposta__titulo"> <strong class="fc--90-100">Máximo</strong> </h2>
    <p class="resposta__fc2"><strong class="strong__titulo">${idade90} bpm - ${fcMax} bpm</strong></p>
    <p><strong class="strong__titulo">Benefícios:</strong> Incrementos ao pico de velocidade(explosão).<br>
    <strong class="strong__titulo">Sensação:</strong> Exaustão muscular e respiratória intensa.<br>
    <strong class="strong__titulo">Recomendado para:</strong> Pessoas em ótima condição física.</p>`
}
