const assert = require('assert');

export const insert = (db: any, gamertag: string, response: any, callback: any) => {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        { a: 1, gamertag: gamertag }, { a: 2, gamertag: gamertag }, { a: 3, gamertag: gamertag }
    ], function (err: any, result: any) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

export const read = (db: any, gamertag: string, response: any, callback: any) => {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.find([
        { a: 1, gamertag: gamertag }
    ], function (err: any, result: any) {
        console.log("Found 3 documents into the collection");
        callback(result);
    });
}