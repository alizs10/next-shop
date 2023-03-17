import mongoose, { SchemaTypes } from "mongoose";
import Product from "./Product";


const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    items: [{
        type: SchemaTypes.ObjectId,
        ref: Product
    }],
    discountAmount: {
        type: Number,
        min: 0,
        required: true
    },
    totalAmount: {
        type: Number,
        min: 0,
        required: true
    },
    payAmount: {
        type: Number,
        min: 0,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        require: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
        require: true
    },
    deletedAt: {
        type: Date,
        default: null
    }
})

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)
