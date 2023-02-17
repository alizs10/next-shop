import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SizeSchema = new Schema({
    size: {
        type: Number,
        min: 3,
        max: 17,
        required: true
    }
})

export default mongoose.models.Size || mongoose.model('Size', SizeSchema)