//Función para el boton que te lleva directo al inicio
window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('.btn__scroll').style.display = 'block';
        } else {
            document.querySelector('.btn__scroll').style.display = 'none';
        }
    }

    document.querySelector('.btn__scroll').addEventListener('click', function() {
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    });