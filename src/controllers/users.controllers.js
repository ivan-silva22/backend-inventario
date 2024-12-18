import User from "../models/user";

export const createUser = async (req, res) =>{
    try {
        const { email, password } = req.body;
        let emailUser = await User.findOne({email});
        if(emailUser){
            return res.status(400).json({
                success: false,
                message: "El email ya está registrado",
            });
        };
        const newUser = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        res.status(201).json({
            success: true,
            user: newUser.name,
            role: newUser.role,
            message: "Usuario creado exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al crear el usuario",
            error: error.message
        })
    }
}

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

export const deleteUser = async (req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            })
        }
        res.status(200).json({
            success: true,
            message: "Usuario eliminado exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al eliminar el usuario",
            error: error.message
        })
    }
}

export const updatedUser = async (req, res) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            })
        }
        res.status(200).json({
            success: true,
            message: "Usuario actualizado exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al actualizar el usuario",
        })
    }
}

export const login = async (req, res) =>{
    try {
        const { email, password } = req.body;
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Email o contraseña incorrectos",
            });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                success: false,
                message: "Email o contraseña incorrectos",
            });
        }
        res.status(200).json({
            success: true,
            message: "Inicio de sesión exitoso",
            user: user.name,
            role: user.role,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al iniciar sesión",
            error: error.message
        })
    }
}