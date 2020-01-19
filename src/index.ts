import express = require('express');
import { insert, read, remove, update } from './functions/helpers';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: require('find-config')('.env') });

// Database Name
const dbName = process.env.DBNAME;

// Connection URL
const url = process.env.URL;

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

let db: any;
let collection: any;
// Use connect method to connect to the Server

// ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗ 
// ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
// ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
// ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
// ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
// ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
// Server                                             
async function start() {
  app.use(cors());
  // Configuring body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  const responseHead = {
    'Content-Type': 'text/json',
    'Developer': 'Nicolaas Nel (NicmeisteR)',
    'Support-Development': 'https://ko-fi.com/nicmeister',
    'Twitter': 'https://twitter.com/FinalNecessity'
  };

  app.post('/post', async (request, response) => {
    response.writeHead(200, responseHead);

    let gamertag = request.body.gamertag;

    let player = await insert(collection, gamertag);
    response.end(JSON.stringify(player))
  })

  app.get('/get', async (request, response) => {
    response.writeHead(200, responseHead);

    let gamertag = request.body.gamertag;

    let player = await read(collection, gamertag);
    response.end(JSON.stringify(player))
  });

  app.delete('/delete', async (request, response) => {
    response.writeHead(200, responseHead);

    let gamertag = request.body.gamertag;

    let player = await remove(collection, gamertag);
    response.end(JSON.stringify(player))
  });

  app.put('/put', async (request, response) => {
    response.writeHead(200, responseHead);

    let gamertag = request.body.gamertag;

    let player = await update(collection, gamertag, request.body.name);
    response.end(JSON.stringify(player))
  });

  app.listen(process.env.PORT, () => console.log(`API now available on http://localhost:${process.env.PORT}`));
}

// let app = express();
const app: express.Application = express();

client.connect((err: any) => {
  if (err) {
    console.log(err)
  };

  db = client.db(dbName);
  // Get the documents collection
  collection = db.collection('documents');
  start();
});

// ███████╗███╗   ██╗ ██████╗██████╗ ██╗   ██╗██████╗ ████████╗███████╗██████╗     ███████╗███████╗████████╗██╗   ██╗██████╗ 
// ██╔════╝████╗  ██║██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗╚══██╔══╝██╔════╝██╔══██╗    ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
// █████╗  ██╔██╗ ██║██║     ██████╔╝ ╚████╔╝ ██████╔╝   ██║   █████╗  ██║  ██║    ███████╗█████╗     ██║   ██║   ██║██████╔╝
// ██╔══╝  ██║╚██╗██║██║     ██╔══██╗  ╚██╔╝  ██╔═══╝    ██║   ██╔══╝  ██║  ██║    ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝ 
// ███████╗██║ ╚████║╚██████╗██║  ██║   ██║   ██║        ██║   ███████╗██████╔╝    ███████║███████╗   ██║   ╚██████╔╝██║     
// ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝     
//                                                                                                                           

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });