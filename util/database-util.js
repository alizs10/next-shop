import mongoose from "mongoose"

export async function connectDatabase(database) {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${database}`)
}

export function closeConnection() {
    mongoose.disconnect()
}

