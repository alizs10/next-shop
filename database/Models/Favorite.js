import mongoose, { SchemaTypes } from "mongoose";
import Product from "./Product";
import User from './User';

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    
    user: {
        type: SchemaTypes.ObjectId,
        ref: User,
        require: true
    },
    product: {
        type: SchemaTypes.ObjectId,
        ref: Product,
        require: true
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

export default mongoose.models.Favorite || mongoose.model('Favorite', FavoriteSchema)