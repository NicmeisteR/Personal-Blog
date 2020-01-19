"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var helpers_1 = require("./functions/helpers");
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config({ path: require('find-config')('.env') });
// Database Name
var dbName = process.env.DBNAME;
// Connection URL
var url = process.env.URL;
// Create a new MongoClient
var client = new MongoClient(url, { useUnifiedTopology: true });
var db;
var collection;
// Use connect method to connect to the Server
// ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗ 
// ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
// ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
// ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
// ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
// ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
// Server                                             
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var responseHead;
        var _this = this;
        return __generator(this, function (_a) {
            app.use(cors());
            // Configuring body parser middleware
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            responseHead = {
                'Content-Type': 'text/json',
                'Developer': 'Nicolaas Nel (NicmeisteR)',
                'Support-Development': 'https://ko-fi.com/nicmeister',
                'Twitter': 'https://twitter.com/FinalNecessity'
            };
            app.post('/post', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
                var gamertag, player;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            response.writeHead(200, responseHead);
                            gamertag = request.body.gamertag;
                            return [4 /*yield*/, helpers_1.insert(collection, gamertag)];
                        case 1:
                            player = _a.sent();
                            response.end(JSON.stringify(player));
                            return [2 /*return*/];
                    }
                });
            }); });
            app.get('/get', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
                var gamertag, player;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            response.writeHead(200, responseHead);
                            gamertag = request.body.gamertag;
                            return [4 /*yield*/, helpers_1.read(collection, gamertag)];
                        case 1:
                            player = _a.sent();
                            response.end(JSON.stringify(player));
                            return [2 /*return*/];
                    }
                });
            }); });
            app.delete('/delete', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
                var gamertag, player;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            response.writeHead(200, responseHead);
                            gamertag = request.body.gamertag;
                            return [4 /*yield*/, helpers_1.remove(collection, gamertag)];
                        case 1:
                            player = _a.sent();
                            response.end(JSON.stringify(player));
                            return [2 /*return*/];
                    }
                });
            }); });
            app.put('/put', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
                var gamertag, player;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            response.writeHead(200, responseHead);
                            gamertag = request.body.gamertag;
                            return [4 /*yield*/, helpers_1.update(collection, gamertag, request.body.name)];
                        case 1:
                            player = _a.sent();
                            response.end(JSON.stringify(player));
                            return [2 /*return*/];
                    }
                });
            }); });
            app.listen(process.env.PORT, function () { return console.log("API now available on http://localhost:" + process.env.PORT); });
            return [2 /*return*/];
        });
    });
}
// let app = express();
var app = express();
client.connect(function (err) {
    if (err) {
        console.log(err);
    }
    ;
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
