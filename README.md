# Comunidad Activa

Aplicación web para registrar y consultar eventos comunitarios, desarrollada con React, Vite, Node.js y Express. Su objetivo es facilitar la organización y difusión de actividades comunitarias, promoviendo la participación y la integración de las personas.

La aplicación permite registrar eventos mediante formularios, consultar los eventos disponibles y validar la información ingresada por los usuarios. Los registros se almacenan en un archivo JSON para conservar los datos sin necesidad de utilizar una base de datos externa.

## Capturas de pantalla

### Página de inicio

La página principal presenta la aplicación y permite a los usuarios acceder a sus funcionalidades principales.

<img width="1919" height="972" alt="Captura de pantalla 2026-10-15 181307" src="https://github.com/user-attachments/assets/1dc14830-9cb9-4635-9e08-8f0ff6b9bc10" />


### Registro de eventos

Esta sección permite ingresar la información necesaria para registrar un nuevo evento comunitario. El formulario valida los campos obligatorios y el formato del correo electrónico.

<img width="890" height="938" alt="Captura de pantalla 2026-10-15 181353" src="https://github.com/user-attachments/assets/756dbec0-0dcd-434a-bb91-a6e9a75d1c19" />


### Consulta de eventos

En esta sección se muestran los eventos registrados, permitiendo a los usuarios consultar la información disponible.

<img width="1180" height="930" alt="Captura de pantalla 2026-10-15 181450" src="https://github.com/user-attachments/assets/59eda210-394d-4d52-9755-22c7f8f344e0" />


## Características principales

- Página de inicio para acceder a las funcionalidades de la aplicación.
- Registro de eventos comunitarios mediante formularios.
- Consulta de los eventos registrados.
- Validación de campos obligatorios.
- Validación del formato del correo electrónico.
- Comunicación entre el frontend y el backend.
- Almacenamiento de registros en un archivo JSON.
- Organización del proyecto en módulos independientes de frontend y backend.

## Tecnologías utilizadas

**React:** biblioteca utilizada para desarrollar las interfaces de usuario.

**Vite:** herramienta que facilita el desarrollo y la compilación de la aplicación frontend.

**JavaScript:** lenguaje de programación utilizado para implementar la lógica de la aplicación.

**Node.js:** entorno de ejecución utilizado para desarrollar el servidor backend.

**Express:** framework utilizado para gestionar las solicitudes HTTP y crear los endpoints de la API.

**JSON:** formato utilizado para almacenar la información de los eventos.

**npm:** administrador de paquetes utilizado para instalar las dependencias del proyecto.

**Git:** sistema de control de versiones utilizado para gestionar los cambios del código.

## Requisitos

Para instalar y ejecutar el proyecto, es necesario contar con Node.js, npm y Git.

Node.js y npm permiten ejecutar la aplicación e instalar sus dependencias. Git permite clonar el repositorio y administrar las versiones del proyecto.

Para comprobar que Node.js y npm están instalados, ejecuta los siguientes comandos en una terminal:

```bash
node -v
npm -v
```

## Estructura del proyecto

El proyecto está organizado en dos carpetas principales: `frontend/` y `backend/`.

La carpeta `frontend/` contiene la interfaz de usuario desarrollada con React y Vite. Aquí se encuentran los componentes, las vistas y la lógica relacionada con la interacción del usuario.

La carpeta `backend/` contiene el servidor desarrollado con Node.js y Express. Se encarga de procesar las solicitudes y gestionar el almacenamiento de los eventos.

## Instalación

Primero, abre una terminal y accede a la carpeta raíz del proyecto.

Para instalar las dependencias del backend, ejecuta:

```bash
cd backend
npm install
```

Después, regresa a la carpeta raíz e instala las dependencias del frontend:

```bash
cd ../frontend
npm install
```

Una vez finalizada la instalación, podrás iniciar cada parte de la aplicación.

## Ejecución

Para ejecutar el proyecto, es necesario iniciar el backend y el frontend en terminales independientes.

**Iniciar el backend**

Abre una terminal y ejecuta:

```bash
cd backend
npm start
```

Este comando requiere que el archivo `package.json` del backend tenga configurado el script `start`. Si el proyecto utiliza otro comando, ejecuta el que esté definido en su configuración.

**Iniciar el frontend**

Abre una segunda terminal y ejecuta:

```bash
cd frontend
npm run dev
```

Vite mostrará la dirección local donde se encuentra disponible la aplicación. Abre esa dirección en el navegador para acceder a Comunidad Activa.

## Pruebas funcionales

Para comprobar el funcionamiento de la aplicación, realiza las siguientes pruebas:

1. Acceder a la página de inicio y verificar que se visualice correctamente.
2. Ingresar a la sección de registro de eventos.
3. Intentar registrar un evento sin completar los campos obligatorios.
4. Introducir un correo electrónico con un formato incorrecto.
5. Registrar un evento con información válida.
6. Consultar el listado y comprobar que el nuevo evento aparezca.
7. Reiniciar el backend y verificar que los registros anteriores se conserven.

Estas pruebas permiten comprobar el funcionamiento del formulario, las validaciones, la comunicación entre el frontend y el backend y la persistencia de los datos.

## Almacenamiento de datos

Comunidad Activa utiliza un archivo JSON para almacenar los registros de eventos.

Este método permite guardar información estructurada de forma sencilla y recuperarla cuando se vuelve a ejecutar la aplicación, siempre que el backend gestione correctamente la lectura y escritura del archivo.

## Propósito académico

Comunidad Activa es un proyecto de desarrollo web que permite aplicar conocimientos de frontend, backend, integración mediante API, validación de formularios y almacenamiento de información.
