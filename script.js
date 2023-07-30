
function sim(){
    document.getElementById('btnAbrirArquivo').addEventListener('click', function() {
        // Substitua "caminho_do_arquivo.html" pelo caminho do arquivo que deseja abrir
        window.location.href = 'sim.html';
      });
}


function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}