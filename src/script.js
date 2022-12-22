const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorNombre = document.getElementById("errorNombre");
errorNombre.style.color = "red";
const errorApellido = document.getElementById("errorApellido");
errorApellido.style.color = "red";
const errorEmail = document.getElementById("errorEmail");
errorEmail.style.color = "red";
const errorPassword = document.getElementById("errorPassword");
errorPassword.style.color = "red";

email.addEventListener("input", function(evt) {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    // truthy and falsy values
    if (!emailRegex.test(evt.target.value)){          
        document.getElementById("emailErrorIcon").classList.add("errorIcon");
        document.getElementById("email").classList.add("errorInput");
        errorEmail.innerHTML = "Looks like this is not email";
    } else {
        document.getElementById("emailErrorIcon").classList.remove("errorIcon");
        document.getElementById("email").classList.remove("errorInput");
        errorEmail.innerHTML = ''
    }
})
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (evt) {
  //console.log('enviando form');
  evt.preventDefault();

  let mensajeErrorNombre = [];
  let mensajeErrorApellido = [];
  let mensajeErrorEmail = [];
  let mensajeErrorPassword = [];

  if (nombre.value === null || nombre.value === "") {
    mensajeErrorNombre.push("First Name cannot be empty");
    document.getElementById("nombreErrorIcon").classList.add("errorIcon");
    document.getElementById("nombre").classList.add("errorInput");
  } else {
    document.getElementById("nombreErrorIcon").classList.remove("errorIcon");
    document.getElementById("nombre").classList.remove("errorInput");
  }
  errorNombre.innerHTML = mensajeErrorNombre;
  

  if (apellido.value === null || apellido.value === "") {
    mensajeErrorApellido.push("Last Name cannot be empty");
    document.getElementById("apellidoErrorIcon").classList.add("errorIcon");
    document.getElementById("apellido").classList.add("errorInput");
  } else {
    document.getElementById("apellidoErrorIcon").classList.remove("errorIcon");
    document.getElementById("apellido").classList.remove("errorInput");
  }
  errorApellido.innerHTML = mensajeErrorApellido;

  if (email.value === null || email.value === "") {
    mensajeErrorEmail.push("Email cannot be empty");
    document.getElementById("emailErrorIcon").classList.add("errorIcon");
    document.getElementById("email").classList.add("errorInput");
  } else{
    document.getElementById("emailErrorIcon").classList.remove("errorIcon");
    document.getElementById("email").classList.remove("errorInput");
  }
  errorEmail.innerHTML = mensajeErrorEmail;

  if (password.value === null || password.value === "") {
    mensajeErrorPassword.push("Password cannot be empty");
    document.getElementById("passwordErrorIcon").classList.add("errorIcon");
    document.getElementById("password").classList.add("errorInput");
  }else{
    document.getElementById("passwordErrorIcon").classList.remove("errorIcon");
    document.getElementById("password").classList.remove("errorInput");
  }
  errorPassword.innerHTML = mensajeErrorPassword;

  if (nombre.value !== null || nombre.value !== "" || apellido.value !== null || apellido.value !== "" || password.value !== null || password.value !== "" || password.value !== null || password.value !== ""  ) { 
    alert('Enviendo formulario');
}

});
