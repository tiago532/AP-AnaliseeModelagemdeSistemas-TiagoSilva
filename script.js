// Função para validar e simular envio do formulário:
function validarFormulario() {
// Captura os valores preenchidos nos campos pelo ID:
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

// Verificação simples de campos vazios e aviso de falta de dados:
    if (nome === "" || email === "" || mensagem === "") {
        alert("Erro: Por favor, preencha todos os campos.");
        return;
    }

// Validação básica de formato de e-mail
    if (email.split("@").length < 2 || email.split(".").length < 2) {
        alert("Erro: Informe um e-mail válido (Ex.: usuario@dominio.com).");
        return;
    }

// Simulação de envio com sucesso
    alert("Mensagem enviada com sucesso! (Simulação)");
    
// Limpar os campos após o envio
    document.getElementById('formContato').reset();
}