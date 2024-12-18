import mongoose, { Schema } from "mongoose";

const supplierSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 200
    },
    contact: {
        type: String,
        minLenght: 2,
        maxLenght: 300
    },
    address: {
        type: String,
        minLenght: 2,
        maxLenght: 300
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});

const Supplier = mongoose.model('supplier', supplierSchema);

export default Supplier;