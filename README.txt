This is a implementation of a simple server in node.js which accepts data for longitude and latitude 
to tell you if a given point is inside a state!

In order to run the program:

1. Have Node.js installed & npm installed
2. run npm install to get all the dependencies
3. cd to the directory of this project and type: npm start
	You should see:
				> state-server@1.0.0 start /project path
				> nodemon server.js

				[nodemon] 1.11.0
				[nodemon] to restart at any time, enter `rs`
				[nodemon] watching: *.*
				[nodemon] starting `node server.js`
				The server is running: http://localhost:8080/

4. An alternative is to cd to the directory of this project and type:

				nodemon server.js
				
5. Once the server is running, open a browser and navigate to:

			http://localhost:8080/
			
6. Type longitude and latitude into the respective search fields and presto!


Tests:

1. There is a tests.sh file that will run test calls to the server. Just type 
			
							./tests.sh 
			
	Then the tests will run for you.

Curl:

1. If you would like to do your own curls, please follow this format:

		curl -X POST -d "value%5Blongitude%5D=longitutdeValue&value%5Blatitude%5D=latitudeValue" http://localhost:8080/
		
		example:
		
		curl -X POST -d "value%5Blongitude%5D=-116.063531&value%5Blatitude%5D=48.99995" http://localhost:8080/