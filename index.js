
// Importamos el modulo express
const express = require('express');

const logger = require('./middlewares/logger')

const userRoutes = require('./routes/user.routes')

// Creamos una instancia de express
const app = express();

// Definimos el puerto en el que escuchará el servidor
const port = 3000;

///Meddleware
app.use(express.json()); //para parcirar la respuesta en formato obj mas legible

//Usuamos el Meddleware 
app.use(logger)

///usuando el Meddleware
app.use('/getUsers', userRoutes) 

// INICIAR el servidor en el puerto definido
app.listen(port, () => {
  // MOSTRAR en consola que el servidor está corriendo
  console.log(` HOLA MUNDO DESDE EL PUERTO ${port}`)
})



