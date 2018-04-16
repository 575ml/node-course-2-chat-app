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
	console.log('New user connected');

	socket.on('disconnect', (socket) => {
	console.log("User was disconnected");
	});

	socket.emit('newMessage', {
		from: 'food',
		text: "I'm not ready.",
		createdAt:  1234
	})

	socket.on('createMessage', (newMessage) => {
		console.log('createMessage', newMessage);
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
