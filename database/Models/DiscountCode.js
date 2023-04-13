import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DiscountCodeSchema = new Schema({
    code: {
        type: String,
        minLength: 4,
        maxLength: 20,
        require: true
    },
    percentage: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    validFrom: {
        type: Date,
        required: true
    },
    validUntil: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type:  Date,
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

export default mongoose.models.DiscountCode || mongoose.model('DiscountCode', DiscountCodeSchema)
