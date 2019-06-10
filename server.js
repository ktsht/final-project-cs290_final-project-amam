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

app.get('/link', function(req, res, next){
	res.status(200).sendFile('/public/splash.html');
	res.redirect('/splash.html');

});

app.get('/', function(req, res, next){
        var houseCollection = mongoDB.collection('house');
        houseCollection.find({}).toArray(function(err, houseDocs){
                if(err){
                        res.status(500).send("Error connecting to DB.");
                }
                res.status(200).render('housePage',{
                        house: houseDocs
                });
        })
});

app.get('/signup', function(req, res, next){
        var houseCollection = mongoDB.collection('house');
        res.status(200).sendFile('/public/signup.html');
});


app.post('/signup', function(req, res){
        if(req.body && req.body.first_name && req.body.last_name && req.body.major
        && req.body.year && req.body.username && req.body.password){
                var collection = mongoDB.collection('house');    
                collection.insertOne({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        year: req.body.year,
                        major: req.body.major,
                        username: req.body.username,
                        password: req.body.password,
                        profile_pic: req.body.profile_pic,
                        has_post: 0,
                        house: []
                },
                        function(err, result){
                                if(err){
                                        console.log("inside err");
                                        res.status(500).send({
                                                error: "Error entering user information into DB"   
                                        });
                                }else{
                                        console.log("==update result:",result);
                                        if (result.matchedCount > 0){
                                                res.status(200).send("Success");
                                        }
                                }
                        }
                );
        }else{
                res.status(400).send("Request needs to have all fields.");
        }
});

app.get('/postt', function(req, res, next){
        res.status(200).render('newPost');
});

app.post('/postt', function(req, res){
        if(req.body && req.body.id && req.body.caption
        && req.body.currMates && req.body.numRooms && req.body.avRooms
				&& req.body.price && req.body.walking && req.body.bike
				&& req.body.car && req.body.description && req.body.photo1 || req.body.photo2 ||
				req.body.photo3 || req.body.photo4 || req.body.photo5){
                var collection = mongoDB.collection('house');
								var id = req.body.id;
								console.log("ID== ", id);
								var newHouse = {
									caption: req.body.caption,
					        currMates: req.body.currMates,
					        numRooms: req.body.numRooms,
					        avRooms: req.body.avRooms,
					        price: req.body.price,
					        walking: req.body.walking,
					        bike: req.body.bike,
					        car: req.body.car,
					        description: req.body.description,
									phot1: req.body.photo1,
									phot2: req.body.photo2,
									phot3: req.body.photo3,
								 	phot4: req.body.photo4,
									phot5: req.body.photo5

								};
								collection.updateOne(
									{ username: id },
									{ $set: { has_post: 1 },  $push: { house: newHouse} },
									function (err, result) {
										if (err) {
											res.status(500).send({
												error: "Error inserting photo into DB"
											});
										} else {
											console.log("== update result:", result);
											if (result.matchedCount > 0) {
												res.status(200).send("Success");
											} else {
												next();
											}
										}
									}
								);}
								else{
                res.status(400).send("Request needs to have all fields.");
        }
});



app.get('/maxPrice/:maxPrice', function(req, res, next){
        var houseCollection = mongoDB.collection('house');
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
        var houseCollection = mongoDB.collection('house');
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

app.get('/year/:year', function(req, res, next){
        var houseCollection = mongoDB.collection('house');
        var findYear = req.params.year;
        console.log("Year: "+findYear);
        houseCollection.find({year: new RegExp(findYear)}).toArray(function(err, houseDocs){ // change cursor to toArray
                if(err){
                        res.status(500).send("Error connecting to DB.");
                }
                res.status(200).render('housePage',{
                        house: houseDocs
                });
        })
});


app.get('/detail/:id', function(req, res, next){
        var houseCollection = mongoDB.collection('house');
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
                        house:[{
                                phot1: houseDocs[0].house[0].phot1,
                                phot2: houseDocs[0].house[0].phot2,
                                phot3: houseDocs[0].house[0].phot3,
                                phot4: houseDocs[0].house[0].phot4,
                                phot5: houseDocs[0].house[0].phot5,
                                profile_pic: houseDocs[0].profile_pic,
                                caption: houseDocs[0].house[0].caption,
                                price: houseDocs[0].house[0].price,
                                description: houseDocs[0].house[0].description,
                                walking: houseDocs[0].house[0].walking,
                                bike: houseDocs[0].house[0].bike,
                                car: houseDocs[0].house[0].car,
                                numRooms: houseDocs[0].house[0].numRooms,
                                avRooms: houseDocs[0].house[0].avRooms
                        }]
                        
                });
        });
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
