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

// export async function insertViews(collection: any, article: number) {

//     let articleDetails:any;
//     // Insert some documents
//     try {
//         article = await collection.insertOne(
//             { 
//                 "article": article.name.toLowerCase(), 
//                 "views": article.views ,
//                 "created": new Date(Date.now())
//             }
//         );
        
//     } catch (error) {
//         article = error;
//     }
    
//     return new Promise<any>((resolve, reject) => {
//         return resolve(articleDetails);
//     });
// }

export async function read (collection: any, parameter: any) {
    // Insert some documents
    let object = await collection.find(
        { "_id": parameter.toLowerCase() }
    ).toArray();

    // collection.find({}).toArray(function(error, documents) {
    //     if (err) throw error;
    
    //     res.send(documents);
    // });
    // node.writeToFile("./", "test", "json", player)
    return new Promise<any>(resolve => {
        return resolve(object);
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

export async function updateViews (collection: any, article: any) {

    let articleViews = await read(collection, article);
    
    let articleDetails:any;
    // Update some documents
    try {
        articleDetails = await collection.updateOne(
            { 
                "_id": article.toLowerCase() 
            },
            {
                $set: {
                    "views": articleViews[0].views + 1,
                },
                $currentDate: { lastModified: true }
            }
        );
        
    } catch (error) {
        node.writeToFile("./", "error", "json", error)
        articleDetails = `Article: ${article.name} doesn't exist.`
    }

    let response = {
        views: articleViews[0].views + 1,
        details: articleDetails
    }
    
    return new Promise<any>((resolve, reject) => {
        return resolve(response);
    });
}