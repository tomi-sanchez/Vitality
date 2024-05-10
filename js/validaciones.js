function validarFormulario(){

    const nombre = document.getElementById("name").value;
    const telefono = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const consulta = document.getElementById("coments").value;
    const mensajeError = document.getElementById("mensajeError");

    //Limpiar mensaje de error
    mensajeError.innerHTML = ""; 

     // Validar nombre solo letras y espacios
     if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        mensajeError.innerHTML += "Por favor, ingrese un nombre válido.<br>";
    }
     // Validar teléfono 10 dígitos
    if (!/^\d{10}$/.test(telefono)) {
        mensajeError.innerHTML += "Por favor, ingrese un número de teléfono válido.<br>";
    }
    // Validar email
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        mensajeError.innerHTML += "Por favor, ingrese un email válido.<br>";
    }
     // Validar consulta con al menos 10 caracteres
    if (consulta.length < 10) {
        mensajeError.innerHTML += "Por favor, ingrese una consulta válida.";
    }
    if (mensajeError.innerHTML === "") {
        mensajeExito.style.display = "block";
        return true; // Envía el formulario si no hay errores
    }
    return false; // Detiene el envío del formulario si hay errores
}

//Función de enviar formulario a traves de formSubmit
document.getElementById("enviar-formulario").addEventListener("submit", function(event) {
    
    if (!validarFormulario()) {
        event.preventDefault();
    } else {
        FormSubmit.submit(this);
    }
});

//Función para que al hacer scroll desaparezca el aviso del mensaje exitoso
window.addEventListener('scroll', function() {
    mensajeExito.style.display = 'none';
});