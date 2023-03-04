import mongoose, { SchemaTypes } from 'mongoose';
import Order from './Order';

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    orderId: {
        type: SchemaTypes.ObjectId,
        ref: Order
    },
    amount: {
        type: Number,
        min: 0,
        required: true
    },
    bankFirstResponse: {
        type: String,
        maxLength: 700
    },
    bankSecondResponse: {
        type: String,
        maxLength: 700
    },
    type: {
        type: String,
        required: true
    },
    paymentDate: {
        type: Date,
        default: null
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

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema)