const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject numbers', () => {
		var res = isRealString(98);
		expect(res).not.toBe('string');
	});

	it('should reject string with spaces only', () => {
		var res = isRealString('   ');
		expect(res).toBe(false);
	});

	it('should allow strings with non-space characters', () => {
		var res = isRealString('Isa');
		expect(res).toBe(true);
	})

});

