import mongoose from "mongoose"

export async function connectDatabase(database) {
    await mongoose.connect(`mongodb://localhost:27017/${database}`)
}

export function closeConnection() {
    mongoose.disconnect()
}

