import User from "../models/user";

export const getUsers = async (req, res) =>{
    try {
        const users = await User.find();
        if(!users){
            return res.status(404).json({
                success: false,
                message: "Usuarios no encontrados",
            });
        };
        res.status(200).json({
            success: true,
            users,
            message: "Usuarios obtenidos exitosamente"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al obtener los usuarios",
            error: error.message
        })
    }
};

export const getUser = async (req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            })
        };
        res.status(200).json({
            success: true,
            user,
            message: "Usuario obtenido exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al obtener el usuario",
            error: error.message
        })
    }
}