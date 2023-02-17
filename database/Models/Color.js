import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ColorSchema = new Schema({
    color_name: {
        type: String,
        maxLength: 70,
        required: true
    },
    color_code: {
        type: String,
        maxLength: 70,
        required: true
    }
})

export default mongoose.models.Color || mongoose.model('Color', ColorSchema)