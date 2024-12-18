import mongoose, { Schema } from "mongoose";

const InventoryMovementSchema = new Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    type: {
        type: String,
        enum: ['entry', 'exit'],
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    notes: {
        type: String,
    }
}) 