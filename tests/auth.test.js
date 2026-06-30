const axios = require('axios');
const BookController = require('./controllers/BookController');
const UserController = require('./controllers/UserController');
const bookslist = require('./testData/bookslist.json');

test('Unathorized user is not able to add book to profile', async () => {
	const response = await BookController.addBook(`${bookslist.books[1]}`);
	expect(response.data.message).toBe('User not authorized!');
});

test('Authorize user', async () => {
	const response = await UserController.login();
	expect(response.data.token).toBeDefined;
});
