import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        maxLength: 255,
        required: true
    },
    image: {
        type: String,
        maxLength: 255,
        required: true
    },
    gallery: {
        type: [String],
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    discount_percentage: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    frozen_number: {
        type: Number,
        min: 0,
        required: true
    },
    marketable_number: {
        type: Number,
        min: 0,
        required: true
    },
    sold_number: {
        type: Number,
        min: 0,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    colors: [mongoose.SchemaTypes.ObjectId],
    sizes: [mongoose.SchemaTypes.ObjectId],
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

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)