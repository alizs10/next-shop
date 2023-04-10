import mongoose, { SchemaTypes } from "mongoose";

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    firstLine: {
        type: String,
        required: true,
        maxLength: 255
    },
    secondLine: {
        type: String,
        required: true,
        maxLength: 255
    },
    zipCode: {
        type: String,
        required: true,
        length: 5
    },
    recipient: {
        firstName: {
            type: String,
            maxLength: 90,
            required: true
        },
        lastName: {
            type: String,
            maxLength: 90,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            length: 10
        }
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

export default mongoose.models.Address || mongoose.model('Address', AddressSchema)