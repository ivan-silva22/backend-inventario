import InventoryMovement from "../models/inventoryMovement";
import Product from "../models/product";

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