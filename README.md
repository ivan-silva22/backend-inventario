
# API de Gestión de Inventarios

## Descripción

La **API de Gestión de Inventarios** es una solución robusta para administrar productos, categorías y movimientos de inventario en tiempo real. Está diseñada para empresas que necesitan optimizar sus procesos de gestión de stock, ventas y proveedores. Esta API permite integrarse fácilmente con aplicaciones web o de escritorio, proporcionando un control completo sobre el inventario y el flujo de productos.

### Características principales:
- **Gestión de Productos**: Crear, editar y eliminar productos, con detalles como nombre, descripción, precio y stock.
- **Gestión de Categorías**: Organizar los productos en categorías, facilitando la búsqueda y organización del inventario.
- **Movimientos de Inventario**: Registra entradas y salidas de productos, gestionando el stock disponible.
- **API RESTful**: Endpoints fáciles de usar para interactuar con la API.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para el backend.
- **Express.js**: Framework para crear la API RESTful.
- **MongoDB**: Base de datos NoSQL para almacenar la información de productos, categorías y movimientos de inventario.
- **Mongoose**: Librería de MongoDB para gestionar modelos y consultas.

## Instalación

### Requisitos previos:
- **Node.js**: 14.x o superior.
- **MongoDB**: Debes tener una base de datos MongoDB configurada (puedes usar MongoDB Atlas para una solución en la nube).
- **Postman** o cualquier otra herramienta para probar las APIs.

### Pasos para la instalación:

1. Clona el repositorio en tu máquina local:
   ```bash
   git https://github.com/ivan-silva22/backend-inventario.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd backend-inventario
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:
   ```bash
   MONGODB_URI=tu_uri_de_mongo
   JWT_SECRET=tu_clave_secreta
   ```

5. Ejecuta el servidor:
   ```bash
   npm start
   ```

   El servidor estará corriendo en `http://localhost:4000`.

## Endpoints de la API

### **Gestión de Categorías**

- **GET /api/categories**: Obtiene todas las categorías.
- **POST /api/categories**: Crea una nueva categoría.
  - **Body**:
    ```json
    {
      "name": "Electrónica"
    }
    ```

### **Gestión de Productos**

- **GET /api/products**: Obtiene todos los productos.
- **POST /api/products**: Crea un nuevo producto.
  - **Body**:
    ```json
    {
      "name": "Laptop",
      "description": "Laptop de 15 pulgadas",
      "price": 1200,
      "stock": 50,
      "category_id": "id_de_categoria"
    }
    ```

- **GET /api/products/:id**: Obtiene un producto específico por ID.
- **PUT /api/products/:id**: Actualiza la información de un producto.
- **DELETE /api/products/:id**: Elimina un producto.

### **Movimientos de Inventario**

- **GET /api/inventory-movements**: Obtiene todos los movimientos de inventario.
- **POST /api/inventory-movements**: Registra un movimiento (entrada o salida) de un producto.
  - **Body**:
    ```json
    {
      "product_id": "id_producto",
      "quantity": 10,
      "type": "entrada" // o "salida"
    }
    ```

## Ejemplo de Uso

### Crear un Producto

Para crear un nuevo producto, realiza una solicitud `POST` a `/api/products` con el siguiente cuerpo:

```json
{
  "name": "Smartphone",
  "description": "Smartphone de última generación",
  "price": 500,
  "stock": 200,
  "category_id": "id_categoria"
}
```

### Registrar un Movimiento de Inventario

Para registrar un movimiento de inventario (por ejemplo, una entrada de productos), realiza una solicitud `POST` a `/api/inventory-movements` con el siguiente cuerpo:

```json
{
  "product_id": "id_producto",
  "quantity": 10,
  "type": "entrada"
}
```

## Estructura del Proyecto

```
/backend-inventario
│
├── /src
│   ├── /controllers        # Controladores para manejar la lógica de las rutas
│   ├── /models             # Modelos de datos (Mongoose)
│   ├── /routes             # Rutas de la API
│   └── /middleware         # Middleware (validaciones, autenticación)
│
├── .env                    # Variables de entorno
├── package.json             # Dependencias y scripts del proyecto
└── README.md                # Documentación del proyecto
```

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza tus cambios.
4. Haz commit de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
5. Sube tus cambios (`git push origin feature-nueva-funcionalidad`).
6. Abre un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
