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

        setTimeout(function() {
            adicionarCursor(elemento);
        }, 90 * textoArray.length);
    }

    function adicionarCursor(elemento) {
        let cursor = document.createElement('span');
        cursor.classList.add('cursor');
        cursor.innerHTML = '|';
        elemento.appendChild(cursor);
    }

    let nome = document.getElementById('titulo');
    if (nome) {
        efeitoEscrever(nome);
    }
});
