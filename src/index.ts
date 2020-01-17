import express = require('express');
import { insert } from './functions/helpers';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: require('find-config')('.env') });

// Connection URL
const url = process.env.URL;

// Database Name
const dbName = process.env.DBNAME;

// Create a new MongoClient
const client = new MongoClient(url);

let db: any;

// Use connect method to connect to the Server

// ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗ 
// ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
// ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
// ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
// ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
// ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
// Server                                             
function start() {
    client.connect((err: any) => { if(err) console.log(err); db = client.db(dbName)});
    

    app.use(cors());
    // Configuring body parser middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  
    app.post('/post', async (request, response) => {
      response.writeHead(200, {
        'Content-Type': 'text/json',
        'Developer': 'Nicolaas Nel (NicmeisteR)',
        'Support-Development': 'https://ko-fi.com/nicmeister',
        'Twitter': 'https://twitter.com/FinalNecessity'
      });
  
      let gamertag = request.body.gamertag;

      insert(db, gamertag, response, function () {
        // client.close();
        try {
            response.end(JSON.stringify(gamertag + " Added"))
          }
        catch (error) {
            console.log(error);
        }
    });
    })

    app.get('/get', async (request, response) => {
      response.writeHead(200, {
        'Content-Type': 'text/json',
        'Developer': 'Nicolaas Nel (NicmeisteR)',
        'Support-Development': 'https://ko-fi.com/nicmeister',
        'Twitter': 'https://twitter.com/FinalNecessity'
      });
  
      let gamertag = request.body.gamertag;

      insert(db, gamertag, response, function () {
        // client.close();
        try {
            response.end(JSON.stringify(gamertag + " retrieved"))
          }
        catch (error) {
            console.log(error);
        }
    });
    })
    app.listen(process.env.PORT, () => console.log(`API now available on http://localhost:${process.env.PORT}`));
  }
  
  // let app = express();
  const app: express.Application = express();
  start();

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