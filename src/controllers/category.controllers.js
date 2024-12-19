import Category from '../models/category';

export const createCategory = async(req, res) =>{
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json({
            success: true,
            category: newCategory,
            message: "Categoria creada exitosamente"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error en el servidor"
        })
    }
}

export const getCategories = async(req, res) => {
    try {
        const categories = await Category.find();
        if(!categories){
            return res.status(404).json({
                success: false,
                message: "No se encontraron categorias"
            })
        }
        res.status(200).json({
            success: true,
            categories: categories,
            message: "Categorias encontradas"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error en el servidor"
        })
    }
}

export const getCategory = async(req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if(!category){
            return res.status(404).json({
                success: false,
                message: "Categoria no encontrada"
            })
        }
        res.status(200).json({
            success: true,
            category: category,
            message: "Categoria encontrada"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error en el servidor"
        })
    }
}

export const updatedCategory = async(req, res) =>{
    try {
        const category = await Category.findByIdAndUpdate(req.params.id);
        if(!category){
            return res.status(404).json({
                success: false,
                message: "Categoria no se pudo actualizar"
            })
        }
        res.status(200).json({
            success: true,
            message: "Categoria actualizada exitosamente"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error en el servidor"
        })
    }
}

export const deleteCategory = async(req, res) =>{
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if(!category){
            return res.status(404).json({
                success: false,
                message: "Categoria no encontrada"
            })
        }
        res.status(200).json({
            success: true,
            message: "Categoria eliminada exitosamente"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error en el servidor"
        })
    }
}