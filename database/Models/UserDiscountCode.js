import mongoose, { SchemaTypes } from "mongoose";

const Schema = mongoose.Schema;

const UserDiscountCodeSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'USER'
    },
    discountCode: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'DiscountCode'
    },
    order: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'Order'
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

export default mongoose.models.UserDiscountCode || mongoose.model('UserDiscountCode', UserDiscountCodeSchema)