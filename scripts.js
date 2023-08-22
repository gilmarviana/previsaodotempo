// // API
const key = "87595df0966da2e5048913aa43e44d5d";

// Criando evento para o ENTER


function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".titulo-cidade").innerHTML ="Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML = `${Math.floor(dados.main.temp)}º C`
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  document.querySelector(".umidade").innerHTML =`Umidade em ${dados.main.humidity}%`;
}

async function buscarCidade(cidade) {
  //AWAIT esperar que o servidor responda
  // Acessando servidor, quando responder, mudar o formato para json e guardar os dados
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  // Joga esta função para a função listada abaixo
  colocarDadosNaTela(dados);
}

// Clica no botao, pega o valor do input e chama a função buscar cidade.
// A API pega a cidade, e transforma a resposta em json
function clickBotao() {
  const cidade = document.querySelector(".input-cidade").value;
  // Joga esta função para a função listada abaixo
  buscarCidade(cidade);
}

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {

        clickBotao();
    }
    
})