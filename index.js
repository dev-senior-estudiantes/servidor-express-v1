/*
 * Archivo principal del servidor Express
 * Configura y arranca la aplicación
 */

// Importamos los módulos necesarios
const express = require('express');
const userRoutes = require('./routes/user.routes');
const logger = require('./middlewares/logger');

// Creamos una instancia de express que será nuestro servidor
const app = express();

// Configuración del servidor:
// 1). Puerto por defecto donde escuchará el servidor
const port = 3000;

// 2). Middleware para parsear el cuerpo de las peticiones JSON
app.use(express.json());

// 3). Middleware personalizado para logging de peticiones
app.use(logger);

// 4). Montamos las rutas de usuarios en el endpoint /api/users
app.use('/api/users', userRoutes);

// 5). Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Usuarios');
});

// 6). Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    message: 'Ruta no encontrada'
  });
});

// 7). INICIAR el servidor en el puerto definido
app.listen(port, () => {
  // MOSTRAR en consola que el servidor está corriendo
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
