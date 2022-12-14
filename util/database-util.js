import { MongoClient, ObjectId } from "mongodb";

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

export async function insertDocument(client, collection, data) {
    const db = client.db()
    const document = await db.collection(collection).insertOne(data)
    return document
}

export async function deleteDocument(client, collection, docId) {
    const db = client.db()
    const result = await db.collection(collection).deleteOne({ "_id": ObjectId(docId) })
    return result
}
