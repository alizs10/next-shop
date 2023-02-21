import mongoose from "mongoose";
import Color from "./Color";
import Size from "./Size";

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
    description: {
        type: String,
        maxLength: 700,
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
    colors: [{ type: Schema.Types.ObjectId, ref: Color }],
    sizes: [{ type: Schema.Types.ObjectId, ref: Size }],
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