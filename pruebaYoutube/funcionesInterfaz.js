 // Función para verificar las credenciales y redirigir al usuario
 function verificarCredenciales() {
    // Obtener los valores del nombre y la contraseña
    var nombre = document.getElementById("nombre").value;
    var contrasena = document.getElementById("contrasena").value;

    // Definir los nombres de usuario permitidos y la contraseña común
    var nombresPermitidos = ["Andrés", "Alejandro", "David"];
    var contrasenaComun = "LenguajeDeMarcas";

    // Verificar si el nombre de usuario está permitido y si la contraseña es correcta
    if (nombresPermitidos.includes(nombre) && contrasena === contrasenaComun) {
        // Credenciales correctas, redireccionar al usuario a la página de pruebaYoutube.html incluyendo el nombre de usuario como un parámetro en la URL
        window.location.href = "pruebaYoutube.html?nombre=" + encodeURIComponent(nombre);
    } else {
        // Credenciales incorrectas, mostrar un mensaje de error
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
}

// Agregar un listener de eventos al formulario para manejar el evento de envío
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    verificarCredenciales();
});

// Agregar un listener de eventos al botón para manejar el clic
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    verificarCredenciales();
});