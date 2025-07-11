const getUsers = async (req, res) => {
    try {
        // Lista fija de usuarios
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

        res.json({
            message: 'Lista de usuarios',
            users
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los usuarios',
            error: error.message
        });
    }
};

module.exports = {
    getUsers
};