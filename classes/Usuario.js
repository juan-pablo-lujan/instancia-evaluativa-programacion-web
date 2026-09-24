export default class Usuario {
  id;
  nombre;
  edad;
  email;
  telefono;
  activo;
  #password;

  constructor(nombre, edad, email, telefono, activo, password) {
    this.id = Date.now();
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
    this.activo = activo;
    this.#password = password;
  }

  static crear(nombre, edad, email, telefono, activo, password) {
    return new Usuario(nombre, edad, email, telefono, activo, password);
  }

  validarPassword(pass) {
    return this.#password === pass;
  }
}
