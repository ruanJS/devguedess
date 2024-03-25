const sendEmail = function() {
    emailjs.init("6C9C9244BBC23D33F126B9547A780E94C66D");

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        // Coleta os dados do formulário
        const formData = {
            name: this.name.value,
            email: this.email.value,
            telefone: this.telefone.value,
            motivo: this.motivo.value,
            mensagem: this.mensagem.value
        };

        // Envia o e-mail usando Email.js
        emailjs.send("6C9C9244BBC23D33F126B9547A780E94C66D", "2525", formData)
            .then(function(response) {
                // Se o envio for bem-sucedido, exibe uma mensagem verde
                document.getElementById("status").innerHTML = "<p style='color: green;'>Seu email foi enviado com sucesso!</p>";
            }, function(error) {
                // Se houver um problema no envio, exibe uma mensagem vermelha
                document.getElementById("status").innerHTML = "<p style='color: red;'>Erro ao enviar a mensagem. Por favor, tente novamente.</p>";
            });
    });
};

// Chama a função sendEmail para iniciar o processo de envio de e-mail quando o documento HTML estiver pronto
document.addEventListener("DOMContentLoaded", sendEmail);
