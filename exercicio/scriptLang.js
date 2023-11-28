
function Escolher(idioma) {
    fetch(`login_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {
            console.log("Valores do JSON:", texto);

            // Define o conteúdo do span #Bem
            document.getElementById('Bem').innerText = texto.Bem;

            // Define o conteúdo do span #Vindo
            var vindoSpan = document.getElementById('Bem').querySelector('#Vindo');
            if (vindoSpan) {
                vindoSpan.innerHTML = texto.Vindo;
            }
        })
}
