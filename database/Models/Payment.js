import mongoose, { SchemaTypes } from 'mongoose';

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    orderId: {
        type: SchemaTypes.ObjectId,
        ref: 'Order'
    },
    amount: {
        type: Number,
        min: 0,
        required: true
    },
    status: {
        type: Boolean,
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

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

