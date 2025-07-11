
// Importamos el modulo express
const express = require('express');

// Creamos una instancia de express
const app = express();

// Definimos el puerto en el que escuchará el servidor
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// INICIAR el servidor en el puerto definido
app.listen(port, () => {
  // MOSTRAR en consola que el servidor está corriendo
  console.log(` HOLA MUNDO DESDE EL PUERTO ${port}`)
})



