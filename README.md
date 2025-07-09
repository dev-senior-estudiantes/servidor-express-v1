# 🚀 Proyecto básico en Express.js con rutas, controladores y middlewares

Este proyecto es un servidor básico construido con **Node.js** y **Express.js**. Implementa una arquitectura modular con rutas, controladores y middlewares para facilitar el mantenimiento y la escalabilidad.

- `index.js` como punto de entrada
- Controladores para separar la lógica
- Rutas para definir endpoints
- Middlewares personalizados para registrar solicitudes

---

## 📁 Estructura del Proyecto

```bash
mi-servidor-express/
│
├── index.js # Punto de entrada del servidor
├── routes/ # Define las rutas de la aplicación
│ └── user.routes.js
├── controllers/ # Contiene la lógica de negocio (controladores)
│ └── user.controller.js
├── middlewares/ # Funciones middleware (registro, validación, etc.)
│ └── logger.js
```

---

## 🚀 Funcionalidades implementadas

- Ruta `GET /api/users` que retorna una lista de usuarios simulada.
- Middleware personalizado para registrar en consola cada solicitud entrante.
- Separación del código por responsabilidades: rutas, controladores y middlewares.

---

## 📦 Requisitos

- Node.js (recomendado: 18.x o superior)
- npm

---

## 📌 Instalación

1. Clona el repositorio o descarga el código:

```bash

git clone https://github.com/tuusuario/mi-servidor-express.git
cd mi-servidor-express

```

2 Inicializa el proyecto e instala dependencias:

```
npm init -y
npm install express

```

📄 Desarrollo del Proyecto - Paso a Paso

1. Inicializar Express

```
npm install express

```

---

## 🧠 Propósito pedagógico de cada archivo

| Archivo                  | Rol educativo                                |
| ------------------------ | -------------------------------------------- |
| `index.js`               | Punto de entrada, conecta todo el sistema.   |
| `user.controller.js`     | Separa la lógica de qué hacer con los datos. |
| `user.routes.js`         | Define los caminos de entrada a la app.      |
| `logger.js` (middleware) | Control sobre qué pasa con cada petición.    |

---

## 📌 Explicación en pseudocódigo de cada archivo

### 📄 `index.js` — Archivo principal del servidor

```
INICIAR el servidor con Express

IMPORTAR el módulo de Express
CREAR una aplicación llamada "app"

DEFINIR el número de puerto (3000)

IMPORTAR las rutas del archivo user.routes.js
IMPORTAR el middleware personalizado desde logger.js

USAR el middleware logger para registrar las peticiones
USAR el middleware express.json para aceptar datos en formato JSON

DECIRLE a Express que use las rutas en '/api/users'

INICIAR el servidor en el puerto definido
MOSTRAR en consola que el servidor está corriendo
```

📄 controllers/user.controller.js —
Controlador de usuarios

```
DEFINIR una función llamada getUsers
  CUANDO se recibe una solicitud,
  RESPONDER con una lista fija de usuarios en formato JSON:
    - Usuario con id 1 y nombre "Carlos"
    - Usuario con id 2 y nombre "Luisa"

EXPORTAR la función getUsers para que pueda usarse en otros archivos
```

📄 routes/user.routes.js — Rutas de usuarios

```
IMPORTAR el módulo Express
CREAR un router (mini servidor) con express.Router()

IMPORTAR la función getUsers desde el archivo user.controller.js

CUANDO alguien haga una solicitud GET en la ruta '/',
  USAR la función getUsers como respuesta

EXPORTAR el router para que se pueda usar en el archivo principal (index.js)

```

📄 middlewares/logger.js — Middleware para registrar solicitudes

```
DEFINIR una función middleware que recibe la solicitud, la respuesta y la función next

OBTENER la fecha y hora actual
OBTENER el tipo de solicitud (GET, POST, etc.)
OBTENER la ruta solicitada

IMPRIMIR en consola esa información

LLAMAR a la función next() para que el servidor continúe con la siguiente acción
EXPORTAR el middleware para usarlo en otros archivos

```

▶️ Ejecutar el proyecto

```
node index.js

```

Deberías ver el mensaje:

```
Servidor corriendo en http://localhost:3000

```

✅ Probar la API
Endpoint: GET /api/users
Puedes probarlo en el navegador o con Postman:

```
GET http://localhost:3000/api/users

```

Respuesta esperada:

```
[
  { "id": 1, "name": "Carlos" },
  { "id": 2, "name": "Luisa" }
]
```

Además, el middleware imprimirá en consola algo como:

```
[2025-06-09T23:45:12.345Z] GET /api/users
```

📚 Explicación técnica
| Componente | Descripción |
| ------------------ | -------------------------------------------------------------------- |
| `express.Router()` | Permite agrupar rutas en archivos separados. |
| `controllers` | Contienen la lógica que se ejecuta cuando se llama una ruta. |
| `middlewares` | Se ejecutan antes de que la ruta final procese la solicitud. |
| `express.json()` | Permite a Express entender datos en formato JSON en las solicitudes. |

🧠 Recomendaciones
Puedes extender el proyecto añadiendo rutas POST, PUT, DELETE.

Usa una base de datos como MongoDB o SQLite si quieres persistencia de datos.

Añade validación con express-validator y manejo de errores centralizado.

👨‍🏫 Recomendaciones pedagógicas
Añadir rutas POST para practicar inserción de datos.

Implementar controladores más complejos (con base de datos).

Agregar validaciones o middlewares extra (ej: autenticación).

Refactorizar a estructura MVC + MongoDB cuando estén listos.

🧑‍💻 Autor y Colaboradores

| Rol                       | Nombre completo   | GitHub / Contacto                           |
| ------------------------- | ----------------- | ------------------------------------------- |
| 👨‍💻 Autor principal        | **Carlos García** | https://github.com/carlosjuliogarciaorjuela |
| 👩‍💻 Colaborador Dev Senior | **nombre**        |                                             |
| 👨‍💻 Colaborador Dev Senior | **nombre**        |                                             |
| 👩‍🎓 Estudiante colaborador | **Mary Joseph**   | https://github.com/Emjey25                  |
| 👨‍🎓 Estudiante colaborador | **nombre**        |                                             |

📄 Licencia
Este proyecto es de uso libre para fines educativos.
