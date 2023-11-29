// main.js
import { getLista } from "./lista";

// Passo 1 - Ache o elementos importantes
const pEntrada = document.querySelector('#entrada');
const olSaida = documen.querySelector('#saida');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

olSaida.innerHTML = "";

function atualizarItensDeLista(){
    for(let i = 0; i < array.lenght; i++){
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent = item;
        document.body.appendChild(li);
    }
}