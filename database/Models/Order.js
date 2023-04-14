import mongoose, { SchemaTypes } from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    items: [{
        type: SchemaTypes.ObjectId,
        ref: 'CartItem'
    }],
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
    },
    address: {
        type: SchemaTypes.ObjectId,
        default: null,
        ref: 'Address',
    },
    delivery: {
        type: SchemaTypes.ObjectId,
        default: null,
        ref: 'Delivery',
    },
    tax: {
        type: Number,
        default: 2,
        immutable: true,
    },
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
    payments: [{
        type: SchemaTypes.ObjectId,
        default: null,
        ref: 'Payment'
    }],
    status: {
        type: String,
        default: null,
        enum: [null, '0', '1', '2', '3']
    },
    paymentStatus: {
        type: String,
        default: null,
        enum: [null, '0', '1', '2']
    },
    discountCode: {
        type: SchemaTypes.ObjectId,
        default:null,
        ref: 'DiscountCode'
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
