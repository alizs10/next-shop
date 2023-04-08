import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    time: {
        type: String,
        required: true
    },
    price: {
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

export default mongoose.models.Delivery || mongoose.model('Delivery', DeliverySchema)