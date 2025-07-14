/*
 * Middleware para logging de peticiones HTTP
 * Registra cada solicitud que llega al servidor
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 * @param {Function} next - Función para continuar con el siguiente middleware
 */
const logger = (req, res, next) => {
    // Obtenemos la fecha y hora actual en formato ISO
    // Esto nos permite saber exactamente cuándo se hizo la solicitud
    const timestamp = new Date().toISOString();
    
    // Obtenemos el método HTTP utilizado (GET, POST, etc.)
    const method = req.method;
    
    // Obtenemos la ruta que se está solicitando
    const path = req.path;
    
    // Logueamos en consola toda la información de la petición
    console.log(`[${timestamp}] ${method} ${path}`);
    
    // Llamamos a next() para continuar con el siguiente middleware o ruta
    // Esto es crucial para que la petición siga su flujo normal
    next();
};

// Exportamos el middleware para usarlo en el servidor
module.exports = logger;