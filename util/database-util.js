import { MongoClient } from "mongodb";

export async function connectDatabase(database) {
    const client = await MongoClient.connect(`mongodb://localhost:27017/${database}`);
    return client;
}

export async function getDocuments(client, collection) {
    const db = client.db()
    const documents = await db.collection(collection).find().sort({ _id: -1 }).toArray()
    return documents
}

export async function findDocument(client, collection, filter) {
    const db = client.db()
    const document = await db.collection(collection).findOne(filter)
    return document
}
