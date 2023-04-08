import mongoose from "mongoose"

export async function connectDatabase(database) {

    await mongoose.connect(`mongodb://127.0.0.1:27017/${database}`).then(() => console.log("mongo db connected!"))

}

export function closeConnection() {
    mongoose.disconnect()
}

