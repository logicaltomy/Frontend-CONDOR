document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const correo = document.getElementById('correo');
  const password = document.getElementById('password');
  const listInputs = document.querySelectorAll(".form-input");

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // limpiar mensajes previos
    listInputs.forEach(el => el.lastElementChild.innerHTML = "");

    let valido = true;

    //El ! en vez de significar lo contrario, es comprobar si viene vacio

    if (!correo.value.trim()) {
      mostrarError("correo", "Por favor ingresa el correo");
      valido = false;
    }

    if (!password.value.trim()) {
      mostrarError("password", "Por favor ingresa la contraseña");
      valido = false;
    }

    // simulamos login válido con usuario "admin" y pass "1234"
    if (valido) {
    const correoRegistrado = localStorage.getItem("correo");
    const passwordRegistrado = localStorage.getItem("password");
    
    if (correo.value === correoRegistrado && password.value === passwordRegistrado) {
       
        // redirigir a otra página
        window.location.href = "index.html";
      } else {
        mostrarError("password", "Correo o contraseña incorrectos");
      }
    }
  });

  function mostrarError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
  }  

  
});