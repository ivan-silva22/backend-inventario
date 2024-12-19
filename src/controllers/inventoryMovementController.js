import InventoryMovement from "../models/inventoryMovement";
import Product from "../models/products";

export const createInventoryMovement = async (req, res) =>{ 
    try {
        const {product_id, quantity, type} = req.body;
        const product = await Product.findById(product_id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            })
        }
        if(type === "entry"){
            product.stock += quantity;
        }else{
            if(product.stock < quantity){
                res.status(400).json({
                    success: false,
                    message: "No hay suficiente stock para realizar la salida",
                })
            }
            product.stock -= quantity;
        }
        await product.save();
        const newInventoryMovement = new InventoryMovement(req.body);
        await newInventoryMovement.save();
        res.status(201).json({
            success: true,
            InventoryMovement: newInventoryMovement,
            message: "Movimiento de inventario creado exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al crear el movimiento de inventario",
        })
    }
}

export const getInventoryMovements = async (req, res) =>{
    try {
        const movements = await InventoryMovement.find();
        if(!movements){
            return res.status(404).json({
                success: false,
                message: "Movimientos de inventario no encontrados",
            })
        }
        res.status(200).json({
            success: true,
            movements,
            message: "Movimientos de inventario obtenidos exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al obtener los movimientos de inventario",
        })
    }
}

export const getInventoryMovement = async (req, res) =>{
    try {
        const movement = await InventoryMovement.findById(req.params.id);
        if(!movement){
            res.status(404).json({
                success: false,
                message: "Movimiento de inventario no encontrado",
            })
        }
        res.status(200).json({
            success: true,
            movement,
            message: "Movimiento de inventario obtenido exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al obtener el movimiento de inventario",
        })
    }
}

export const deleteInventoryMovement = async (req, res) =>{
    try {
        const movement = await InventoryMovement.findById(req.params.id);
        if(!movement){
            res.status(404).json({
                success: false,
                message: "Movimiento de inventario no encontrado",
            })
        }
        const product = await Product.findById(movement.product_id);
        if(movement.type === "entry"){
            product.stock -= movement.quantity;
        }else{
            product.stock += movement.quantity;
        }
        await product.save();
        res.status(200).json({
            success: true,
            message: "Movimiento de inventario eliminado exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al eliminar el movimiento de inventario",
        })
    }
}