document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuario");
  const correo = localStorage.getItem("correo");
  const password = localStorage.getItem("password");

  // 🔹 Si no hay datos en localStorage → redirigir al registro
  if (!usuario || !correo || !password) {
    window.location.href = "../registrarse.html";
    return;
  }

  // Mostrar datos en el perfil
  document.getElementById("perfilUsuario").innerText = usuario;
  document.getElementById("perfilCorreo").innerText = correo;
  
  const passwordSpan = document.getElementById("perfilPassword");
  let passwordVisible = false;
  passwordSpan.innerText = "••••••"; // Oculto por defecto

  // Mostrar la contraseña al hacer clic
  passwordSpan.style.cursor = "pointer";
  passwordSpan.title = "Haz clic para mostrar/ocultar la contraseña";
  passwordSpan.addEventListener("click", () => {
    passwordVisible = !passwordVisible;
    passwordSpan.innerText = passwordVisible ? password : "••••••";
  });


  // Botón cerrar sesión
  document.getElementById("cerrarSesion").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../registrarse.html";
  });
});
