"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
exports.insert = function (db, gamertag, response, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        { a: 1, gamertag: gamertag }, { a: 2, gamertag: gamertag }, { a: 3, gamertag: gamertag }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};
exports.read = function (db, gamertag, response, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.find([
        { a: 1, gamertag: gamertag }
    ], function (err, result) {
        console.log("Found 3 documents into the collection");
        callback(result);
    });
};
