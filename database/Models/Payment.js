import mongoose, { SchemaTypes } from 'mongoose';

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    order: {
        type: SchemaTypes.ObjectId,
        ref: 'Order',
        required: true
    },
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        min: 0,
        required: true
    },
    status: {
        type: String,
        default: null,
        enum: [null, '0', '1', '2']
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

