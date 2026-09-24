import Usuario from "./classes/Usuario.js";

const usuariosArray = [];

const formulario = document.getElementById("formUsuario");
const tbodyUsuarios = document.getElementById("tablaUsuarios");
const btnGuardar = document.getElementById("btnGuardar");

// MOSTRAR / OCULTAR ERROR
function aplicarEstadoError(input, elementoError, mensaje, hayError) {
  if (hayError) {

    input.classList.add("border-red-500", "bg-red-50", "text-red-900");
    input.classList.remove("border-slate-300");


    elementoError.textContent = mensaje;
    elementoError.className = "text-red-600 text-xs mt-1 block";
  } else {
    
    input.classList.remove("border-red-500", "bg-red-50", "text-red-900");
    input.classList.add("border-slate-300");


    elementoError.textContent = "";
    elementoError.className = "text-red-600 text-xs mt-1 hidden";
  }
}


// validar el formulario
function validarFormulario() {
  const nombreInput = document.getElementById("nombre");
  const edadInput = document.getElementById("edad");
  const telefonoInput = document.getElementById("telefono");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const passwordConfirmInput = document.getElementById("passwordConfirm");

  const nombre = nombreInput.value.trim();
  const edad = edadInput.value.trim();
  const telefono = telefonoInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  // regex
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexTelefono = /^[0-9]{8,15}$/;
  const regexPassword = /^(?=.*[A-Z])(?=.*\.).{6,}$/;

  // longitud del nombre
  const nombreValido = nombre !== "" && nombre.length >= 2;
  
  // validacion edad
  const numEdad = Number(edad);
  const edadValida = edad !== "" && !isNaN(numEdad) && numEdad > 0 && numEdad <= 110;

  const telefonoValido = regexTelefono.test(telefono);
  const emailValido = regexEmail.test(email);
  const passwordValida = regexPassword.test(password);
  const passwordConfirmada = passwordConfirm !== "" && password === passwordConfirm;

  // evaluar cada input 
  aplicarEstadoError(
    nombreInput,
    document.getElementById("errorNombre"),
    "El nombre es obligatorio y debe tener más de 2 carácteres",
    nombre !== "" && !nombreValido
  );

  aplicarEstadoError(
    edadInput,
    document.getElementById("errorEdad"),
    "Ingrese una edad válida (1 a 110 años).",
    edad !== "" && !edadValida
  );

  aplicarEstadoError(
    telefonoInput,
    document.getElementById("errorTelefono"),
    "El teléfono debe tener entre 8 y 15 números.",
    telefono !== "" && !telefonoValido
  );

  aplicarEstadoError(
    emailInput,
    document.getElementById("errorEmail"),
    "Ingrese un correo electrónico válido.",
    email !== "" && !emailValido
  );

  aplicarEstadoError(
    passwordInput,
    document.getElementById("errorPassword"),
    "Mínimo 6 caracteres, una mayúscula y un punto (.).",
    password !== "" && !passwordValida
  );

  aplicarEstadoError(
    passwordConfirmInput,
    document.getElementById("errorPasswordConfirm"),
    "Las contraseñas no coinciden.",
    passwordConfirm !== "" && !passwordConfirmada
  );

  // FORMULARIO GENERAL
  const formularioValido =
    nombreValido &&
    edadValida &&
    telefonoValido &&
    emailValido &&
    passwordValida &&
    passwordConfirmada;

  // HABILITAR / DESHABILITAR BOTÓN
  btnGuardar.disabled = !formularioValido;

  if (formularioValido) {
    btnGuardar.classList.remove("bg-slate-400", "cursor-not-allowed");
    btnGuardar.classList.add("bg-blue-600", "hover:bg-blue-700", "cursor-pointer");
  } else {
    btnGuardar.classList.remove("bg-blue-600", "hover:bg-blue-700", "cursor-pointer");
    btnGuardar.classList.add("bg-slate-400", "cursor-not-allowed");
  }

  return formularioValido;
}


// EVENTOS Y TABLA
formulario.addEventListener("input", validarFormulario);

// mostrar / ocultar contraseña
const checkVerPassword = document.getElementById("verPassword");
checkVerPassword.addEventListener("change", function () {
  const tipo = checkVerPassword.checked ? "text" : "password";
  document.getElementById("password").type = tipo;
  document.getElementById("passwordConfirm").type = tipo;
});

// renderizar tabla
function renderizarTabla() {
  tbodyUsuarios.innerHTML = "";

  usuariosArray.forEach((usuario) => {
    const fila = document.createElement("tr");
    const badgeEstado = usuario.activo
      ? `<span class="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium">Activo</span>`
      : `<span class="bg-red-100 text-red-700 text-xs px-2.5 py-1 rounded-full font-medium">Inactivo</span>`;

    fila.innerHTML = `
      <td class="py-3 px-4 font-medium text-slate-900">${usuario.id}</td>
      <td class="py-3 px-4 font-medium text-slate-900">${usuario.nombre}</td>
      <td class="py-3 px-4">${usuario.edad}</td>
      <td class="py-3 px-4">${usuario.email}</td>
      <td class="py-3 px-4">${usuario.telefono}</td>
      <td class="py-3 px-4">${badgeEstado}</td>
    `;
    tbodyUsuarios.appendChild(fila);
  });
}

// envio de formulario
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!validarFormulario()) return;

  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value, 10);
  const telefono = document.getElementById("telefono").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const activo = document.getElementById("activo").checked;

  const nuevoUsuario = Usuario.crear(nombre, edad, email, telefono, activo, password);
  usuariosArray.push(nuevoUsuario);

  renderizarTabla();
  formulario.reset();

  // Se limpian los types de password, para que no sean visibles
  document.getElementById("password").type = "password";
  document.getElementById("passwordConfirm").type = "password";

  // Limpiar estilos de los campos
  document.querySelectorAll("#formUsuario input[type='text'], #formUsuario input[type='number'], #formUsuario input[type='email'], #formUsuario input[type='password'], #formUsuario input[type='tel']").forEach(input => {
    input.classList.remove("border-red-500", "bg-red-50", "text-red-900");
    input.classList.add("border-slate-300");
  });

  validarFormulario();
});

// Inicializar
validarFormulario();