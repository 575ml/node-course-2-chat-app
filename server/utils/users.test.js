const expect = require('expect'),
	  {Users} = require('./users');

describe('Users', () => {

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'George',
			room: 'Breakfast'
		}, {
			id: '2',
			name: 'Harold',
			room: 'Dinner'
		}, {
			id: '3',
			name: 'Julie',
			room: 'Dinner'
		}]
	});

	it('should add new users', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Aiza',
			room: 'Food'
		};
		var reUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toBe(undefined);
    expect(users.users.length).toBe(3);
  });



	it('should find a user', () => {
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find a user', () => {
		var userId = '30';
		var user = users.getUser(userId);

		expect(user).toBe();
	});

	it('should return names for Dinner', () => {
		var userList = users.getUserList('Dinner');

		expect(userList).toEqual(['Harold', 'Julie']);
	});

	it('should return names for Breakfast', () => {
		var userList = users.getUserList('Breakfast');

		expect(userList).toEqual(['George']);
	});
});