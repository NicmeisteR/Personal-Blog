<style>
    table {
        width:100%;
    };
    
    th {
        width:100%; 
    };
</style>

# Node-TS-MongoDB
Node TypeScript Base with MongoDB.

# To-Do

| Task        | Status
| ------------- |:-------------:|
| Make an Express API that posts to MongoDB. | [✅] |
| Make an Express API that gets data from MongoDB. | [✅] |
| Make an Express API that deletes data from MongoDB. | [🚧] |
| Add GraphQL. | [🚧] |

# Notes

Insert:
* db.collection.insertOne() New in version 3.2
* db.collection.insertMany() New in version 3.2

Read: 
* db.collection.find()
    ```javascript
    db.users.find(
        { age: { $gt: 18 } },
        { name: 1, address: 1 }
    ).limit(5)
    ```

Update:
* db.collection.updateOne() New in version 3.2
* db.collection.updateMany() New in version 3.2
* db.collection.replaceOne() New in version 3.2
    ```javascript
    db.users.updateMany(
        { age: { $lt: 18 } },
        { $set: { status: "reject" } }
    )
    ```

Delete: 
* db.collection.deleteOne() New in version 3.2
* db.collection.deleteMany() New in version 3.2
    ```javascript
    db.users.deleteMany(
        { status: "reject" }
    )
    ```

Reference:
* CRUD: https://docs.mongodb.com/manual/crud/
* Insert: https://docs.mongodb.com/manual/tutorial/insert-documents/
* Insert Methods: https://docs.mongodb.com/manual/reference/insert-methods/
* Query: https://docs.mongodb.com/manual/tutorial/query-documents/
* Update: https://docs.mongodb.com/manual/tutorial/update-documents/
* Delete: https://docs.mongodb.com/manual/tutorial/remove-documents/
