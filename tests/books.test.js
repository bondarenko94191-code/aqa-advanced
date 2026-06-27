const axios = require('axios');
const BookController = require('./controllers/BookController');
const UserController = require('./controllers/UserController');
const bookslist = require('./testData/bookslist.json');

describe('Get books', () => {
	test('Get books list', async () => {
		const response = await BookController.getBookList();
		expect(response.status).toBe(200);
		expect(response.data.books[0].title).toBe('Git Pocket Guide');
	});
	test('Get books` info', async () => {
		const response = await BookController.getBookInfo(bookslist.books[7]);
		const bookData = response.data;
		expect(bookData.title).toBe('Understanding ECMAScript 6');
		expect(bookData.isbn).toBe('9781593277574');
		expect(response.status).toBe(200);
	});
});

describe('Add books', () => {
	let token;
	let userName;
	let userId;
	beforeAll(async () => {});
	test('Add book to user profile ', async () => {
		const responseAuth = await UserController.login();
		token = responseAuth.data.token;

		const response = await BookController.addBook(token);
		expect(response.status).toBe(201);
	});
	afterAll(async () => {
		const responseAuth = await UserController.login('alina-t', 'Bondarenko1!');
		const response = await BookController.deleteBook('4fdbaf65-9f94-4d12-aedb-347feba17f17', token);
	});
});

describe('Delete books', () => {
	let token;
	beforeAll(async () => {});
	test('Delete book from user profile', async () => {
		const responseAuth = await UserController.login();
		token = responseAuth.data.token;

		const response = await BookController.deleteBook(token);
		expect(response.status).toBe(204);
		console.log(response.data.books);
	});
	afterAll(async () => {
		const responseAuth = await UserController.login('alina-t', 'Bondarenko1!');
		const response = await BookController.deleteBook('4fdbaf65-9f94-4d12-aedb-347feba17f17', token);
	});
});

// test('Get books` info', async () => {
// 	const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574');
// 	const bookData = response.data;
// 	expect(bookData.title).toBe('Understanding ECMAScript 6');
// 	expect(bookData.isbn).toBe('9781593277574');
// 	expect(response.status).toBe(200);
// });
