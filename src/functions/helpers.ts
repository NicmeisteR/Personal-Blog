const assert = require('assert');
const node = require('node-essentials');

export async function insert(collection: any, gamertag: string) {
    
    // Insert some documents
    let player = await collection.insertOne(
        { "gamertag": gamertag }
    );
    return new Promise<any>(resolve => {
        return resolve(player);
    });
}

export async function read (collection: any, gamertag: string) {
    // Insert some documents
    let player = await collection.find(
        { "gamertag": gamertag }
    ).limit(1).toArray();

    // collection.find({}).toArray(function(error, documents) {
    //     if (err) throw error;
    
    //     res.send(documents);
    // });
    // node.writeToFile("./", "test", "json", player)
    return new Promise<any>(resolve => {
        return resolve(player);
    });
}