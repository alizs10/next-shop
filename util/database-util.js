import mongoose from "mongoose"

export async function connectDatabase(database) {
    if (mongoose.connection.readyState >= 1) return
    
    return await mongoose.connect(`mongodb://127.0.0.1:27017/${database}`).then(() => console.log("db connected!"))
}

export function closeConnection() {
    mongoose.disconnect()
}