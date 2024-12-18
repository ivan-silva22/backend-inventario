import Supplier from "../models/supplier";

export const createSupplier = async (req, res) => {
    try {
        const { name } = req.body;
        const supplier = new Supplier.findOne({ name });
        if (supplier) {
            return res.status(400).json({
                success: false,
                message: "El proveedor ya existe"
            })
        }
        const newSupplier = new Supplier(req.body);
        await newSupplier.save();
        res.status(201).json({
            success: true,
            supplier: newSupplier.name,
            message: "Proveedor creado exitosamente"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al crear el proveedor",
            error: error.message
        })
    }
}

export const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        if (!suppliers) {
            return res.status(404).json({
                success: false,
                message: "Proveedores no encontrados"
            })
        }
        res.status(200).json({
            success: true,
            suppliers,
            message: "Proveedores obtenidos exitosamente"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al obtener los proveedores",
        })
    }
}

export const getSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: "Proveedor no encontrado"
            })
        }
        res.status(200).json({
            success: true,
            supplier,
            message: "Proveedor obtenido exitosamente"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al obtener el proveedor",
            error: error.message
        })
    }
}

export const deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: "Proveedor no encontrado"
            })
        }
        res.status(200).json({
            success: true,
            message: "Proveedor eliminado exitosamente"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al intentar eliminar el proveedor",
            error: error.message
        })
    }
}

export const updatedSpplier = async (req, res) =>{
    try {
        const supplier = await Supplier.findByIdAndUpdate(req.params.id);
        if(!supplier){
            return res.status(404).json({
                success: false,
                message: "Proveedor no encontrado"
            })
        }
        res.status(200).json({
            success: true,
            message: "Proveedor actualizado exitosamente"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al actualizar el proveedor",
            error: error.message
        })
    }
}