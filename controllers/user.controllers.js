/*
 * Controlador para manejar las peticiones relacionadas con usuarios
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getUsers = async (req, res) => {
    try {
        // Lista fija de usuarios (en producción esto debería venir de una base de datos)
        const users = [
            {
                id: 1,
                name: 'Carlos'
            },
            {
                id: 2,
                name: 'Luisa'
            }
        ];
        // Respondemos con un objeto JSON que incluye un mensaje y la lista de usuarios
        res.json({
            message: 'Lista de usuarios',
            users
        });
    } catch (error) {
        // En caso de error, respondemos con un código 500 y un mensaje de error
        res.status(500).json({
            message: 'Error al obtener los usuarios',
            error: error.message
        });
    }
};

// Exportamos el controlador para usarlo en el servidor
module.exports = {
    getUsers
};