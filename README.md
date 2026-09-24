# IE 1 - CRUD de Usuarios

Aplicación web desarrollada para la gestión, validación y renderizado dinámico de usuarios. Proyecto correspondiente a las materias Programación I & Programación Web I, de la tecnicatura en Desarrollo Web y Aplicaciones Digitales del Inst. Superior Sta. Rosa de Calamuchita.
---

## Integrantes del Grupo
* Mauricio Merlo
* Luisina Cenitagoya Suarez
* Juan Pablo Luján
* Sebastián Reinhart
---

## Cómo Ejecutar el Proyecto

Para visualizar y probar la aplicación en tu navegador de forma local, se recomienda utilizar la extensión **Live Server** de Visual Studio Code para garantizar el correcto funcionamiento de los módulos de JavaScript (`type="module"`):

1. Clonar o descargar el repositorio:

2. Abrir el proyecto:
Abre la carpeta raíz del proyecto en Visual Studio Code.

3. Instalar las dependencias:

Desde la terminal, ubicándose en la carpeta raíz del proyecto, ejecutar:
``` bash
npm install
```

5. Instalar Live Server (si no la tienes):

Ve a la pestaña de Extensiones en VS Code (Ctrl + Shift + X o Cmd + Shift + X en Mac).

Busca Live Server (desarrollada por Ritwick Dey) e instálala.

6. Iniciar la aplicación:

Abre el archivo index.html.

Haz clic derecho sobre el archivo y selecciona "Open with Live Server" (o presiona el botón Go Live en la barra inferior de VS Code).

El proyecto se abrirá automáticamente en tu navegador predeterminado (habitualmente en la dirección http://127.0.0.1:5500).


## Descripción de la Solución

El proyecto implementa un flujo completo de alta de usuarios aplicando los siguientes pilares de desarrollo web:

1. **Programación Orientada a Objetos (POO) y Encapsulamiento:**
   - La entidad `Usuario` está representada en la clase `classes/Usuario.js` mediante la sintaxis de Módulos ES6 (`export` / `import`).
   - Se utiliza la sintaxis nativa `#password` para definir la contraseña como una **propiedad privada**. Esto garantiza que la información sensible permanezca encapsulada y nunca sea accesible o expuesta en el DOM o la tabla de la interfaz.

2. **Validación Visual de Formulario:**
   - Las validaciones se ejecutan de manera reactiva en tiempo real mientras el usuario escribe (`input` event).
   - Se aplican expresiones regulares (Regex) para formato de correo electrónico y complejidad de contraseña.
   - Se restringe el campo `edad` a un valor numérico coherente (1 a 120 años) tanto en lógica JavaScript como con atributos de entrada HTML (`min` y `max`).
   - Gestión visual del error remarcando los bordes y fondo del input en tonos rojos junto a un mensaje explicativo explícito por cada campo con fallo.

3. **Renderizado Dinámico y DOM:**
   - Un arreglo global `usuariosArray` almacena las instancias creadas.
   - La tabla se re-renderiza dinámicamente al enviar el formulario exitosamente, mostrando los atributos públicos del usuario (`id`, `nombre`, `edad`, `email`, `telefono`) y un badge estilizado para el estado `activo`.

4. **Estilos con TailwindCSS:**
   - Diseño limpio, intuitivo y responsivo construido utilizando clases de TailwindCSS compiladas mediante su CLI.

---

## Tecnologías utilizadas

- HTML5
- JavaScript ES6+
- Programación Orientada a Objetos (POO)
- TailwindCSS
- Node.js
- npm
- Módulos ES6 (`import` / `export`)

---

## Scripts disponibles

El proyecto utiliza Tailwind CSS para aplicar los estilos de la interfaz. Para facilitar la generación automática de los estilos, se configuraron los siguientes scripts en package.json:

* "npm run twcss": inicia Tailwind CSS utilizando la CLI mediante npx. Genera el archivo src/output.css a partir de src/input.css y permanece observando los cambios realizados en el proyecto.

* "npm run twcssnd": alternativa para iniciar Tailwind CSS ejecutando directamente su CLI mediante Node.js.

Para iniciar Tailwind CSS durante el desarrollo se puede ejecutar:

```bash
npm run twcss
```

Una vez iniciado, Tailwind CSS queda en modo watch, detectando los cambios realizados y actualizando automáticamente src/output.css.

---

## Estructura del Proyecto

```text
├── classes/
│   └── Usuario.js
│
├── src/
│   ├── input.css
│   └── output.css
│
├── index.html
├── index.js
├── package.json
├── package-lock.json
└── README.md
```
---
## Consigna

1. Objetivo

Desarrollar una aplicación web interactiva que permita gestionar el alta y
visualización de usuarios aplicando principios de Programación Orientada a
Objetos (POO), encapsulamiento en JavaScript, validaciones en el
frontend y renderizado dinámico en el DOM, utilizando TailwindCSS para el diseño
de la interfaz.

2. Estructura del Proyecto

El proyecto debe respetar estrictamente la siguiente arquitectura de archivos:

├── classes/
   └── Usuario.js
├── index.html
└── index.js

3. Requerimientos 

A. Clase Usuario (classes/Usuario.js)

La clase debe estar modularizada (utilizando export / import de ES6) y contar
con las siguientes propiedades:

  - Propiedades Públicas:
      - id (puede ser autoincremental o generado dinámicamente)
      - nombre (string)
      - edad (number)
      - email (string)
      - telefono (string)
      - activo (boolean)
  - Propiedad Privada:
      - password (string)

B. Formulario de Carga y Validaciones (index.html e index.js)

1.  Diseñar un formulario que contenga campos para ingresar todas las
    propiedades del usuario.
2.  Incluir dos campos de contraseña: "Contraseña" y "Confirmar contraseña".
3.  Disponer de un botón "Guardar" para procesar los datos.
4.  Validaciones obligatorias antes de instanciar el objeto:
      - Todos los campos obligatorios deben estar completos.
      - Formato válido de correo electrónico.
      - Edad como valor numérico coherente (> 0).
      - Coincidencia exacta entre ambos campos de contraseña.
      - Manejo visual de errores (mensajes claros para el usuario cuando una
        validación falle).

C. Almacenamiento y Renderizado Dinámico

1.  En index.js, mantener un array de usuarios que comience vacío (const
    usuarios = [];).
2.  Al superar las validaciones y presionar "Guardar":
      - Instanciar un nuevo objeto de la clase Usuario.
      - Agregarlo al array.
      - Limpiar y reestablecer los campos del formulario.
3.  Tabla de usuarios:
      - Ubicada debajo del formulario.
      - Debe actualizarse dinámicamente cada vez que se agregue un usuario al
        array.
      - Mostrar todas las propiedades públicas del usuario (el campo privado de
        la contraseña jamás debe exponerse en el DOM ni en la tabla).
      - Representar visualmente el estado activo (por ejemplo, con un badge de
        estado o texto indicativo).

D. Diseño e Interfaz

  - Se debe utilizar TailwindCSS (mediante CLI) para estilizar la
    aplicación.
  - La interfaz debe ser prolija, intuitiva y contar con un diseño responsivo.

4. Modalidad de Entrega

  - Modalidad: Grupal.
  - Medio de entrega: Enlace a un repositorio de GitHub.
      - El repositorio debe incluir un archivo README.md con los nombres de los
        integrantes y una breve descripción de la solución.
  - Instancia de evaluación: Presentación oral grupal.
      - Cada integrante deberá explicar partes del código y responder preguntas
        teóricas/prácticas sobre el código del proyecto
