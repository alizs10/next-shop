import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        maxLength: 90,
        required: true
    },
    email: {
        type: String,
        unique: true,
        maxLength: 70,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        immutable: true
    },
    phone: {
        type: String,
        default: null,
        length: 10
    },
    birthday: {
        type: Date,
        default: null,
    },
    activation: {
        type: Date,
        default: null,
    },
    verification_code: {
        type: String,
        default: null,
        length: 6
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

export default mongoose.models.User || mongoose.model('User', UserSchema)