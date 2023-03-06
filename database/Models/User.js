import mongoose, { SchemaTypes } from "mongoose";
import Order from "./Order";
import Payment from "./Payment";
import Product from "./Product";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        maxLength: 90,
        required: true
    },
    email: {
        type: String,
        unique: true,
        maxLength: 70,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        immutable: true
    },
    favorites: [{
        type: SchemaTypes.ObjectId,
        ref: Product
    }],
    carts: [{
        type: SchemaTypes.ObjectId,
        ref: Product
    }],
    orders: [{
        type: SchemaTypes.ObjectId,
        ref: Order
    }],
    payments: [{
        type: SchemaTypes.ObjectId,
        ref: Payment
    }],
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

export default mongoose.models.User || mongoose.model('User', UserSchema)