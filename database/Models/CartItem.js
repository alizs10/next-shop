import mongoose, { SchemaTypes } from "mongoose";
import Product from "./Product";
import Size from "./Size";
import User from "./User";

const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    userId: {
        type: SchemaTypes.ObjectId,
        ref: User,
        required: true
    },
    productId: {
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
            sizeId: { type: SchemaTypes.ObjectId, ref: Size },
            price_increase: {
                type: Number,
                required: true,
                min: 0
            }
        }
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
