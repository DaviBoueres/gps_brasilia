const formCadastro = document.getElementById('form-cadastro');
const formLogin = document.getElementById('form-login');
const msgCadastro = document.getElementById('msg-cadastro');
const msgLogin = document.getElementById('msg-login');

// Função para injetar a mensagem no HTML
function mostrarMensagem(elemento, texto, tipo) {
    elemento.textContent = texto;
    elemento.className = `mensagem-alerta ${tipo}`; // Aplica a classe 'erro' ou 'sucesso'
    
    // Remove a mensagem da tela após 4 segundos
    setTimeout(() => {
        elemento.textContent = '';
        elemento.className = 'mensagem-alerta';
    }, 4000);
}

// Lógica de Criação de Cadastro
formCadastro.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('cad-nome').value;
    const email = document.getElementById('cad-email').value;
    const senha = document.getElementById('cad-senha').value;

    let usuariosSalvos = JSON.parse(localStorage.getItem('gpsBrasilia_usuarios')) || [];
    const usuarioExiste = usuariosSalvos.find(u => u.email === email || u.nome === nome);

    if (usuarioExiste) {
        mostrarMensagem(msgCadastro, 'Este nome ou e-mail já está em uso.', 'erro');
        return; 
    }

    const novoUsuario = { nome: nome, email: email, senha: senha };

    usuariosSalvos.push(novoUsuario);
    localStorage.setItem('gpsBrasilia_usuarios', JSON.stringify(usuariosSalvos));
    
    mostrarMensagem(msgCadastro, 'Conta criada! Redirecionando para login...', 'sucesso');
    formCadastro.reset();
    
    // Aguarda 1.5 segundos para o usuário ler a mensagem antes de alternar a aba
    setTimeout(() => {
        document.querySelector('.auth-tab').click(); 
    }, 1500);
});

// Lógica de Validação de Login
formLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailTentativa = document.getElementById('login-email').value;
    const senhaTentativa = document.getElementById('login-senha').value; 
    
    const usuariosSalvos = JSON.parse(localStorage.getItem('gpsBrasilia_usuarios')) || [];
    const usuarioValido = usuariosSalvos.find(u => u.email === emailTentativa && u.senha === senhaTentativa);
    
    if (usuarioValido) {
        mostrarMensagem(msgLogin, `Bem-vindo(a), ${usuarioValido.nome}! Entrando...`, 'sucesso');
        // Aguarda 1 segundo antes de mudar de página
        setTimeout(() => {
            window.location.href = 'newindex.html';
        }, 1000);
    } else { 
        mostrarMensagem(msgLogin, 'E-mail ou senha incorretos.', 'erro');
    }
});