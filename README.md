# Backend de Gestión de Inventario

Este proyecto es una **API RESTful** desarrollada con **Node.js** y **MongoDB** para la gestión de inventarios. Permite realizar operaciones sobre productos, categorías, usuarios, y movimientos de inventario, proporcionando una solución flexible y eficiente para la administración de inventarios en aplicaciones de negocio.

## Índice

1. [Descripción](#descripción)
2. [Tecnologías](#tecnologías)
3. [Instalación](#instalación)
4. [Configuración](#configuración)
5. [Rutas API](#rutas-api)
6. [Ejemplo de Uso](#ejemplo-de-uso)
7. [Estructura del Proyecto](#estructura-del-proyecto)
8. [Contribución](#contribución)
9. [Licencia](#licencia)

## Descripción

La API de **gestión de inventarios** está diseñada para ser utilizada en sistemas que necesiten gestionar productos, categorías y movimientos de inventario. Los usuarios pueden realizar las siguientes operaciones:

- Crear, obtener, actualizar y eliminar categorías de productos.
- Crear, obtener, actualizar  y eliminar productos.
- Registrar movimientos de inventario, como ingresos y salidas de productos.
- Gestionar usuarios para el acceso a la API.

Este backend es ideal para integrarse con sistemas de frontend y administrar inventarios en tiempo real.

## Tecnologías

Este proyecto usa las siguientes tecnologías:

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework para Node.js que facilita la creación de APIs RESTful.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los datos.
- **Mongoose**: Librería ODM (Object Data Modeling) que facilita la interacción con MongoDB desde Node.js.
- **Bcrypt.js**: Librería para encriptar contraseñas de los usuarios.
- **JWT (JSON Web Tokens)**: Para autenticación de usuarios.
- **dotenv**: Para gestionar variables de entorno de manera segura.
- **express-validator**: Para validar las solicitudes entrantes y garantizar la integridad de los datos.

## Instalación

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git https://github.com/ivan-silva22/backend-inventario.git

### 2. Instalar las dependencias

```bash
git npm install

### 3. Configurar el entorno

```bash
git PORT=4000
    DB_URI=mongodb://localhost:27017/inventario

### 4. Ejecutar el proyecto

```bash
git npm start

