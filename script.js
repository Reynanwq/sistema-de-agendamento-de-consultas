document.addEventListener('DOMContentLoaded', () => {

    function efeitoEscrever(elemento) {
        let textoElemento = elemento.innerHTML;
        let textoArray = textoElemento.split('');
        elemento.innerHTML = '';

        textoArray.forEach(function (letra, index) {
            setTimeout(function() {
                elemento.innerHTML += letra;
            }, 60 * index);
        });
    }

    let nome = document.getElementById('titulo');
    if (nome) {
        efeitoEscrever(nome);
    }

});
