import Product from "../models/products";

export const getProducts = async (req, res) =>{
    try {
        const { category_id } = req.body;
        const filter = category_id ? {category_id} : {};
        const products = await Product.find(filter).populate('category_id', 'name');
        res.status(200).json({
            success: true,
            products: products,
            message: "Productos obtenidos exitosamenente"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener los productos',
            error: error.message,
        });
    }
}

export const getProduct = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado",
            });
        }
        res.status(200).json({
            success: true,
            product,
            message: "Productos obtenidos exitosamenente"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al obtener el producto",
            error: error.message
        })
    }
}

export const  deleteProduct = async (req, res) =>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado",
            })
        };
        res.status(200).json({
            success: true,
            message: "Producto eliminado exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al intentar eliminar el producto",
            error: error.message,
        })
    }
}

export const updatedProduct = async (req, res) =>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado",
            })
        };
        res.status(200).json({
            success: true,
            message: "Producto actualizado exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al intentar actualizar el producto",
            error: error.message,
        })
    }
}

export const createProduct = async (req, res) =>{
    try {
        const newProduct =  new Product(req.body);
        await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Producto creado exitosamente",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error al intentar crear el producto",
            error: error.message,
        })
    }
}