const assert = require('assert');
const node = require('node-essentials');

export async function insert(collection: any, gamertag: string) {

    let player:any;
    // Insert some documents
    try {
        player = await collection.insertOne(
            { 
                "gamertag": gamertag.toLowerCase(), 
                "username": gamertag ,
                "created": new Date(Date.now())
            }
        );
        
    } catch (error) {
        player = `Gamertag: ${gamertag} Already Exists.`
    }
    
    return new Promise<any>((resolve, reject) => {
        return resolve(player);
    });
}

export async function read (collection: any, gamertag: string) {
    // Insert some documents
    let player = await collection.find(
        { "gamertag": gamertag.toLowerCase() }
    ).toArray();

    // collection.find({}).toArray(function(error, documents) {
    //     if (err) throw error;
    
    //     res.send(documents);
    // });
    // node.writeToFile("./", "test", "json", player)
    return new Promise<any>(resolve => {
        return resolve(player);
    });
}

export async function remove (collection: any, gamertag: string) {
    
    let player:any;
    // Delete some documents
    try {
        player = await collection.deleteOne(
            { "gamertag": gamertag.toLowerCase(), "username": gamertag }
        );
        
    } catch (error) {
        player = `Gamertag: ${gamertag} doesn't exist.`
    }
    
    return new Promise<any>((resolve, reject) => {
        return resolve(player);
    });
}

export async function update (collection: any, gamertag: string, name: string) {
    
    let player:any;
    // Update some documents
    try {
        player = await collection.updateOne(
            { 
                "gamertag": gamertag.toLowerCase() 
            },
            {
                $set: {
                    "name": name,
                },
                $currentDate: { lastModified: true }
            }
        );
        
    } catch (error) {
        node.writeToFile("./", "error", "json", error)
        player = `Gamertag: ${gamertag} doesn't exist.`
    }
    
    return new Promise<any>((resolve, reject) => {
        return resolve(player);
    });
}