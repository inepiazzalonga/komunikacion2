let btn = document.querySelector('#button');

document.getElementById('form').addEventListener('submit', function (event) {
    emailjs.init('__grvxk77PVpTE4fF');

    event.preventDefault();
    btn.value = 'ENVIANDO...'
    emailjs.sendForm('service_7r135k4', 'template_vaxp5cc', this)
        .then(function () {
            btn.value = 'ENVIAR';
            Swal.fire('En breve nos pondremos en contacto 🙋')
            console.log('Mail status: success');
        }, function (error) {
            btn.value = 'ENVIAR';
            Swal.fire(`El mail no pudo ser enviado, intente de nuevo mas tarde 😕`)
            console.log('Mail status: failed', error);
        });
});