import mongoose, { SchemaTypes } from "mongoose";

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        required: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
        required: true
    },
    deletedAt: {
        type: Date,
        default: null
    }
})

export default mongoose.models.Favorite || mongoose.model('Favorite', FavoriteSchema)