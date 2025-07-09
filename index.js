// Importamos el modulo express
const express = require('express');

// Creamos una instancia de express
const app = express();

// Definimos el puerto en el que escuchará el servidor
const PORT = 3000;

// Importamos las rutas del archivo user.routes.js
const userRoutes = require('./routes/user.routes');

//importamos el middleware de manejo de errores
const logger = require('./middlewares/logger');

// USAR el middleware logger para registrar las peticiones
app.use(logger)

// USAR el middleware express.json para aceptar datos en formato JSON
app.use(express.json())

// DECIRLE a Express que use las rutas en '/api/users'
app.use('/api/users', userRoutes)

// INICIAR el servidor en el puerto definido
app.listen(port, () => {
  // MOSTRAR en consola que el servidor está corriendo
  console.log(`Servidor corriendo en http://localhost:${port}`)
})



