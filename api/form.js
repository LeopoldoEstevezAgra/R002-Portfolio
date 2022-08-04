import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const insertDoc = async (email, content) => {
    try {
        const database = client.db("Portfolio");
        const coll = database.collection("contact-submits");
        // create a document to insert
        
        const result = await coll.insertOne({ 
            email, 
            content,
            read: false,
            createdAt: new Date()
        });
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

export default async function handler(request, response) {
    try {
        const { email, content } = request.body;

        if (!email || !content) { throw err }

        await insertDoc(email, content);



        response.status(200).send();

    } catch {
        response.status(400).send();

    } finally { 
        client.close();

    }

}
