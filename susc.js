let btn = document.querySelector('#btnSus');

document.querySelector('.suscribeContainer').addEventListener('submit', function (event) {
    emailjs.init('PiYl-C39rIpuxbtAj');

    event.preventDefault();
    btn.value = 'ENVIANDO...'
    emailjs.sendForm('service_96ng8fg', 'template_8sbnztg', this)
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