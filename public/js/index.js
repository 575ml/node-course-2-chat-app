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
	var li = jQuery('<li></li>');
	li.text(`${message.from}: ${message.text}`);

	jQuery('#messages').append(li);
});

//Acknowledgements
// socket.emit('createMessage', {
// 	from: 'Frank',
// 	text: 'Hi'
// }, function(data) {
// 	console.log('got it', data)
// })


jQuery('#message-form').on('submit', function(e) {
	e.preventDefault();

	socket.emit('createMessage', {
		from: 'User',
		text: jQuery('[name=message]').val()
	}, function () {

	});
});