var socket = io();

//Connected
socket.on('connect', function(){
	console.log('Connected to server');
});

//Disconnected
socket.on('disconnect', function(){
	console.log('Disconnected to server');
});

//New message
socket.on('newMessage', function(message){
	console.log('New message', message);
});

