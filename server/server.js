const express    = require('express'),
	  http		 = require('http'),
	  socketIO	 = require('socket.io'),
	  app 	  	 = express(),
	  path 	  	 = require('path'),
	  publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 5000;

var server = http.createServer(app),
	io 	   = socketIO(server);

//APP
app.use(express.static(publicPath));

// app.set("view engine", "hbs");


io.on('connection', (socket) => {
	//new user connected
	console.log('New user connected');

	//user disconnected
	socket.on('disconnect', (socket) => {
	console.log("User was disconnected");
	});

	//create message
	socket.on('createMessage', (message) => {
		console.log('createMessage', message);
		io.emit('newMessage', {
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		});
	});
});


//ROUTES

//GET index
app.get('/about', (req, res) => {
	res.render('publicPath/index');
});

//SERVER
server.listen(port, () => {
	console.log(`CHAT running on poty: ${port}`);
});
