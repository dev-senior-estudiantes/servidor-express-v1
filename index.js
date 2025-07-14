
// Importamos el modulo express
const express = require('express');
import  { logger } from './middlewares/logger'

// Creamos una instancia de express
const app = express();

// Definimos el puerto en el que escuchará el servidor
const port = 3000;

//Usuamos el Meddleware 
app.use(logger)

//Probando el Meddleware
app.get('/', (req, res) => {
  res.send('Usando el Meddleware')
})

// INICIAR el servidor en el puerto definido
app.listen(port, () => {
  // MOSTRAR en consola que el servidor está corriendo
  console.log(` HOLA MUNDO DESDE EL PUERTO ${port}`)
})



