var express = require('express');
const util = require('util')
var app = express();

var port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var MongoClient = require('mongodb').MongoClient;          

app.post('/users', function (req, res) {
	console.log('istekgeldi');
   req.rawBody = '';
  req.setEncoding('utf8');

  req.on('data', function(chunk) { 
    req.rawBody += chunk;
  });

  req.on('end', function() {
    var jsonObject = JSON.parse(req.rawBody);
	jsonObject['time'] = new Date();
	MongoClient.connect("mongodb://localhost:27017", function (err, db) {
		
    if (!err) {
		db = db.db('cihaz');
			db.collection('basartikaq').insert(jsonObject, function (err, records) {
                        if (err)
                            throw err;
                        console.log('Bastim Aq:'+JSON.stringify(jsonObject));

			});
	}
	});
  });
});
app.listen(port, function () {
    console.log('Example app listening on port %s!', port)
});