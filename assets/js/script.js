// Obtém a referência para o elemento HTML com o ID 'horas'.
const horas = document.getElementById('horas');
// Obtém a referência para o elemento HTML com o ID 'minutos'.
const minutos = document.getElementById('minutos');
// Obtém a referência para o elemento HTML com o ID 'segundos'.
const segundos = document.getElementById('segundos');

//  Cria um intervalo que executa a função time a cada segundo.
const relogio = setInterval(function time() {
    // Obtém a data atual.
    let dateToday = new Date();
    // Obtém as horas da data atual.
    let hr = dateToday.getHours();
    // Obtém os minutos da data atual.
    let min = dateToday.getMinutes();
    // Obtém os segundos da data atual.
    let s = dateToday.getSeconds();

    // Adiciona um zero à esquerda se as horas forem menores que 10.
    if (hr < 10) hr='0' + hr;
    // Adiciona um zero à esquerda se os minutos forem menores que 10.
    if (min < 10) min ='0' + min;
    //  Adiciona um zero à esquerda se os segundos forem menores que 10.
    if (s < 10) s ='0' + s;

    // Atualiza o conteúdo dos elementos HTML com as horas, minutos e segundos.
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s
})