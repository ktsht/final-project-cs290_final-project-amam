var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var houseData = require('./houseData');

var mongoHost = "classmongo.engr.oregonstate.edu";
var mongoPort = '27017';
var mongoUsername = "cs290_kitaa";
var mongoPassword = "cs290amam";
var mongoDBName = "cs290_kitaa";

var mongoURL = "mongodb://" +
        mongoUsername + ":" + mongoPassword + "@" + mongoHost +
        ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null;

var app = express();
var port = process.env.PORT || 9900;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res, next){
        var houseCollection = mongoDB.collection('test');
        houseCollection.find({}).toArray(function(err, houseDocs){
                if(err){
                        res.status(500).send("Error connecting to DB.");
                }
                res.status(200).render('housePage',{
                        house: houseDocs
                });
        })
});

app.get('/sample', function(req, res, next){
        res.status(200).render('sample_post');
});

app.get('/maxPrice/:maxPrice', function(req, res, next){
        var houseCollection = mongoDB.collection('test');
        var maxPrice = req.params.maxPrice;
        houseCollection.find({price: {$lte: eval(maxPrice)}}).sort({price:1}).toArray(function(err, houseDocs){
                if(err){
                        res.status(500).send("Error connecting to DB.");
                }
                res.status(200).render('housePage',{
                        house: houseDocs
                });
        })
        // var myobj = {price: eval(maxPrice)};
        // houseCollection.insertOne(myobj, function(err, res){
        //         if(err){
        //                 res.status(500).send("Error connecting to DB.");
        //         }
        //         console.log("insertData successfully");
        // });
});

app.get('/major/:major', function(req, res, next){
        var houseCollection = mongoDB.collection('test');
        var findMajor = req.params.major;
        console.log("Major: "+findMajor);
        houseCollection.find({major: new RegExp(findMajor)}).toArray(function(err, houseDocs){ // change cursor to toArray
                if(err){
                        res.status(500).send("Error connecting to DB.");
                }
                res.status(200).render('housePage',{
                        house: houseDocs
                });
        })
});

app.get('/people/:person', function (req, res, next) {
  var person = req.params.person.toLowerCase();
  if (peopleData[person]) {
    res.status(200).render('photoPage', peopleData[person]);
  } else {
    next();
  }
});

app.get('/detail/:id', function(req, res, next){
        var houseCollection = mongoDB.collection('test');
        var houseId = req.params.id;
        houseCollection.find({_id: new ObjectId(houseId)}).toArray(function(err, houseDocs){
                console.log("houseId: " + houseId);
                console.log(houseDocs);
                if(err){
                        res.status(500).send("Error connecting to DB.");
                // } else if(houseDocs.length < 1){
                //         next(); // houseDocs Array is empty -> error 404
                }
                res.status(200).render('details', {
                        profile: houseDocs[0].profile,
                        caption: houseDocs[0].caption,
                        price: houseDocs[0].price,
                        description: houseDocs[0].description,
                        walking: houseDocs[0].walking,
                        bicycle: houseDocs[0].bicycle,
                        car: houseDocs[0].car,
                        nBedrooms: houseDocs[0].nBedrooms,
                        emptyRooms: houseDocs[0].emptyRooms
                });
        })
});

// app.get('/house/:house', ...)each house detail page  //using-mongodb > server.js
// app.post('/house/:house/addinfo', ...)

app.get('*', function(req, res, next){
        res.status(404).render('404');
});


MongoClient.connect(mongoURL, { useNewUrlParser: true }, function(err, client){
        if(err){
                throw err;
        }
        mongoDB = client.db(mongoDBName);
        app.listen(port, function(){
                console.log("== Server listening on port", port);
        });
});
