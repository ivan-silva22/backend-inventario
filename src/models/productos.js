import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    description:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 0
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Producto = mongoose.model('produto', productoSchema);

export default Producto;