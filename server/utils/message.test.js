var expect 			  = require('expect'),
	{generateMessage} = require('./message');




describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Tron';
		var text = 'IO coming in';
		var message = generateMessage(from, text);

		expect(message.createdAt).not.toBe('string')
		expect(message).toMatchObject({from, text})
	});
});