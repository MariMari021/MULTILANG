
function Escolher(idioma) {
    fetch(`login_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {
            console.log("Valores do JSON:", texto);

            // Define o conteúdo do span #Bem
            document.getElementById('Bem').innerText = texto.Bem; 
           
            document.getElementById('nomeUsuario').placeholder = texto.nomeUsuario;
            document.getElementById('senhaInput').placeholder = texto.senhaInput;
            document.getElementById('botaoLogin').innerText = texto.botaoLogin; 
            
            var botaoLogin = document.getElementById('botaoLogin');
            botaoLogin.innerText = texto.botaoLogin;


            
            // Adiciona estilos ao hover do botão
            botaoLogin.addEventListener('mouseover', function () {
                botaoLogin.style.color = '#F8F1EE';
                botaoLogin.style.backgroundColor = '#3C2520';
            });

            botaoLogin.addEventListener('mouseout', function () {
                botaoLogin.style.backgroundColor = '#B99B8D';
                botaoLogin.style.color = '#3C2520' //

        })
        // Remove a classe que estiliza o botão
            botaoLogin.classList.remove('button');

            document.getElementById('loginButton').innerText = texto.loginButton; 
            document.getElementById('registrar').innerText = texto.registrar; 
            document.getElementById('or').innerText = texto.or; 
            document.getElementById('pre2').innerText = texto.pre2;
            document.getElementById('lan2').innerText = texto.lan2;
            document.getElementById('pro2').innerText = texto.pro2;
            document.getElementById('sus2').innerText = texto.sus2;
            document.getElementById('fav').innerText = texto.fav;
            document.getElementById('sn').innerText = texto.sn;


    })
}
