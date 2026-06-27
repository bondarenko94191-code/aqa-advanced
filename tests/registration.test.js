const axios = require('axios');
const UserController = require('./controllers/UserController');
const users = require('./testData/users.json');

test('Register new user', async () => {
	const response = await UserController.register(users.users[3]);
	expect(response.status).toBe(201);
	expect(response.data).toBeDefined;
	console.log(response.data);
});
