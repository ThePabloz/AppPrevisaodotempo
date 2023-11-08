const key ="484ec41e5ad108ec6e02f9945637545c"

function DadosTela(dados){
    document.querySelector('.titulo-cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + "C°"
    document.querySelector('.img-previsao').src = ` https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.umidade').innerHTML = "A umidade relativa do ar :" + dados.main.humidity + "%"
}

async function Buscardados(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
    DadosTela(dados)
}


function CliqueBotao(){
    const cidade = document.querySelector('.input-cidade').value
    Buscardados(cidade)
}