(function () {
    emailjs.init("kmQ4spEMTjYYNQ2Rs");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Coletar dados do formulário
    var formData = {
        name: this.name.value,
        email: this.email.value,
        telefone: this.telefone.value,
        motivo: this.motivo.value,
        mensagem: this.mensagem.value
    };

    // Enviar email usando EmailJS
    emailjs.send('service_s3ar7sn', 'template_oubojgo', formData)
        .then(function (response) {
            alert("Obrigado pelo contato! Sua mensagem foi enviada com sucesso.");
            console.log('SUCCESS!', response.status, response.text);

            // Limpar os campos do formulário
            document.getElementById('contact-form').reset();
        }, function (error) {
            alert("Desculpe, houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.");
            console.log('FAILED...', error);
        });
});
