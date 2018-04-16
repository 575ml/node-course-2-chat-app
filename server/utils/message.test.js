var expect 			  = require('expect'),
	{generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Tron';
		var text = 'IO coming in';
		var message = generateMessage(from, text);

		expect(message.createdAt).not.toBe('string');
		expect(message).toMatchObject({from, text});
	});
});


describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Archie';
		var latitude = 30;
		var longitude =  15;
		var url = 'https://www.google.com/maps?q=30,15';

		var message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).not.toBe('string');
		expect(message).toMatchObject({from, url});
	});
});