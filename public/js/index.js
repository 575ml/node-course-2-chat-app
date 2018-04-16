var socket = io();

socket.on('connect', function(){
	socket.emit('createMessage', {
		from: 'Stomach',
		text: "Yo yo yo! When's lunch?",
	});
});

socket.on('disconnect', function(){
	console.log('Disconnected to server');
});


socket.on('newMessage', function(message){
	console.log('New message', message);
});