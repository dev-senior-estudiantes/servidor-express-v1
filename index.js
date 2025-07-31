/*
 * Archivo principal del servidor Express
 * Configura y arranca la aplicación
 */

// Importamos los módulos necesarios
const express = require('express');

const logger = require('./middlewares/logger')

const userRoutes = require('./routes/user.routes')


// Configuración del servidor:
// 1). Puerto por defecto donde escuchará el servidor
const port = 3000;


// Creamos una instancia de express que será nuestro servidor
const app = express();

//parsiamos el cuerpo de la petiocion
app.use(express.json())

//usamos el logger personalizado 
app.use(logger)

//ruta de la api/user en el endpoint
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('API DE USUARIOS!')
});

app.use((req, res) =>{
  res.status(404).json({
    message: 'ruta no encontrada'
  });
});

// 7). INICIAR el servidor en el puerto definido
app.listen(port, () => {
  // MOSTRAR en consola que el servidor está corriendo
  console.log(` HOLA MUNDO DESDE EL PUERTO ${port}`)
});



