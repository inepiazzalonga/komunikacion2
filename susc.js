let btn = document.querySelector('#btnSus');

document.querySelector('.suscribeContainer').addEventListener('submit', function (event) {
    emailjs.init('__grvxk77PVpTE4fF');

    event.preventDefault();
    btn.value = 'ENVIANDO...'
    emailjs.sendForm('service_7r135k4', 'template_gfpndwp', this)
        .then(function () {
            btnSus.value = 'ENVIAR';
            Swal.fire('Gracias por tu suscripción! Pronto recibirás todas nuestras novedades.')
            console.log('Mail status: success');
        }, function (error) {
            btnSus.value = 'ENVIAR';
            Swal.fire(`No se pudo completar la suscripción, intente de nuevo mas tarde.`)
            console.log('Mail status: failed', error);
        });
});