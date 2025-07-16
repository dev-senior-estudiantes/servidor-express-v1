const logger = (req, res, next) =>{
    //Aqui obtenemos la fecha actual
    const fechaActual = new Date().toISOString();
    const metodo = req.method
    const ruta = req.path
    console.log(fechaActual, metodo, ruta)
    next()
};

module.exports = logger

