import mongoose, { SchemaTypes } from "mongoose";
import Product from "./Product";
import Size from "./Size";
import User from "./User";

const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: User,
        required: true
    },
    product: {
        type: SchemaTypes.ObjectId,
        ref: Product,
        required: true
    },
    selectedAttributes: {
        color_name: {
            type: String,
            required: true
        },
        image: { type: String, required: true },
        palette: [{ type: String, required: true, minlength: 4 }, { type: String, required: true, minlength: 4 }],
        price_increase: {
            type: Number,
            required: true,
            min: 0
        },
        size: {
            size: { type: SchemaTypes.ObjectId, ref: Size, required: true },
            price_increase: {
                type: Number,
                required: true,
                min: 0
            }
        }
    },
    quantity: {
        type: Number,
        min: 1,
        default: 1,
        required: true
    },
    discountAmount: {
        type: Number,
        min: 0,
        required: true
    },
    payPrice: {
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

export default mongoose.models.CartItem || mongoose.model('CartItem', CartItemSchema)
