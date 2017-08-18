'use strict';

//initilize libraries, files, express, and ports
let express = require('express'),
	path = require('path'),
	bp = require('body-parser'),
	fs = require('fs'),
	inside = require('point-in-polygon'), //library to aid in finding location
	stateData = require('./states'), //get that state data!
	app = express(),
	port = process.env.PORT || 8080;

//express servering our html page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(bp.urlencoded({
	extended: true
}));

app.use(bp.json());

//handle post
app.post("/", function (req, res) {
	const long = req.body.value.longitude,
		lat = req.body.value.latitude,
		coordinates = [long, lat];

	//logging statement
	console.log(coordinates);
	for (let i = 0; i < stateData.length; i++) {

		//inside takes ([x,y], polygon) as arguments. It works by keeping y fixed and travesing the array keeping track of intersections, and handling vertexes. If there is a match, it returns true, else it returns false.
		if (inside(coordinates, stateData[i]['border']) == true) {
			res.end("Found it! The point is located in the great state of: " + stateData[i]['state']);
		}
	}
	res.end("Welp, looks like that point is on another planet!");
});

app.listen(port);
//logging statement
console.log('The server is running: http://localhost:8080/');
