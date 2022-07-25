const res = document.querySelector('.container__resposta');
const res2 = document.querySelector('.container__resposta2');
const botaocalc = document.querySelector('#botao__calcular');

botaocalc.onclick = function calcular() {
    
    const peso = parseInt(document.querySelector('#txt_peso').value);
    const p = document.querySelector('#txt_peso').value;
    const rep = parseInt(document.querySelector('#txt_rep').value);
    const r = document.querySelector('#txt_rep').value;
    const cargaMaxima = (0.033 * rep * peso) + peso;
    const cargaHip1 = cargaMaxima * 70 / 100;
    const cargaHip2 = cargaMaxima * 85 / 100;
    const cargaRml1 = cargaMaxima * 40 / 100;
    const cargaRml2 = cargaMaxima * 60 / 100;
    const cargaforca1 = cargaMaxima * 90 /100;

    if (peso >= 1 && rep >= 1) {
        
        res.innerHTML = ""
        res.innerHTML += `<p class="resposta__texto">Sua carga máxima é <strong class="resposta">${Math.round(cargaMaxima)} Kg</strong></p>`

        res.innerHTML += `<p class="resposta__texto"><span class="container__lista__estilo">5.</span> Selecione o seu objetivo para vizualizar a carga e a quantidade de repetições recomendados. <strong class="resposta__strong">Hipertrofia</strong>(aumento da massa muscular), <strong class="resposta__strong">RML</strong>(resistência muscular localizada) ou <strong class="resposta__strong">Força pura</strong>(aumento da capacidade muscular de suportar cargas elevadas.).</p>`;
       
        res.innerHTML += `<input id="botao__hip" class="container__botao botao__resposta" type="button" value="Hipertrofia"><input id="botao__rml" class="container__botao botao__resposta" type="button" value="RML"><input id="botao__forp" class="container__botao botao__resposta" type="button" value="Froça Pura">`
                      
    } else if (p.length == 0 || r.length == 0) {
        alert("ERRO! Por favor forneça os dados e tente novamente.")

        res.innerHTML = `Coloque a quantidade de <strong class="resposta__strong">peso</strong> usado e o número de <strong class="resposta__strong">repetições</strong> realizadas nos campos acima.`
    }
    
    const botaoHip = document.querySelector('#botao__hip');
    const botaoRml = document.querySelector('#botao__rml');
    const botaoFor = document.querySelector('#botao__forp');

    botaoHip.onclick = function mostraHip () {
            
        res2.innerHTML = `<p class="resposta__texto">Para <strong class="resposta__strong">Hipertrofia</strong> use a carga entre <strong class="resposta__strong">${Math.round(cargaHip1)} e ${Math.round(cargaHip2)} Kg.</strong> Faça repetições entre <strong class="resposta__strong">6 e 12</strong>.</p>`;
    }
                       
    botaoRml.onclick = function mostraRml() {

        res2.innerHTML = `<p class="resposta__texto">Para <strong class="resposta__strong">RML</strong> use a carga entre <strong class="resposta__strong">${Math.round(cargaRml1)} e ${Math.round(cargaRml2)} Kg.</strong> Faça repetições entre <strong class="resposta__strong">15 e 25</strong>.</p>`;
    }

    botaoFor.onclick = function mostraFor() {

        res2.innerHTML = `<p class="resposta__texto">Para <strong class="resposta__strong">Força Pura</strong> use a carga entre <strong class="resposta__strong">${Math.round(cargaforca1)} e ${Math.round(cargaMaxima)} Kg.</strong> Faça repetições entre <strong class="resposta__strong">1 e 5</strong>.</p>`;
    }        
}


