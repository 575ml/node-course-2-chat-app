const express           = require('express'),
	  http		        = require('http'),
	  socketIO	        = require('socket.io'),
	  app 	  	        = express(),
	  path 	  	        = require('path'),
	  publicPath        = path.join(__dirname, '../public');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const port = process.env.PORT || 5000;

var server = http.createServer(app),
	io 	   = socketIO(server),
	users  = new Users();


//APP
app.use(express.static(publicPath));

// app.set("view engine", "hbs");


io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      return callback('Name and room name are required.');
    }

    socket.join(params.room);
    users.removeUser(socket.id);
    users.addUser(socket.id, params.name, params.room);

    io.to(params.room).emit('updateUserList', users.getUserList(params.room));
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
    callback();
  });

  socket.on('createMessage', (message, callback) => {
    // console.log('createMessage', message);
    var user = users.getUser(socket.id);

    if(user && isRealString(message.text)) {
    	io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
    }
    callback();
  });

  socket.on('createLocationMessage', (coords) => {
  	var user = users.getUser(socket.id);

  	if(user) {
  		io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude))
  	}
  });

  socket.on('disconnect', () => {
    var user = users.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
    }
  });
});

//SERVER
server.listen(port, () => {
	console.log(`DIALOGUE running on poty: ${port}`);
});
