import mongoose, { SchemaTypes } from "mongoose";
import Color from "./Color";
import Product from "./Product";
import Size from "./Size";

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    items: [{
        type: SchemaTypes.ObjectId,
        ref: Product
    }],
    itemsAttributes: [
        {
            itemId: { type: SchemaTypes.ObjectId, ref: Product },
            color: {
                colorId: { type: SchemaTypes.ObjectId, ref: Color },
                price_increase: { type: Number, min: 0, required: true }
            },
            size: {
                sizeId: { type: SchemaTypes.ObjectId, ref: Size },
                price_increase: { type: Number, min: 0, required: true }
            }
        }
    ],
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
