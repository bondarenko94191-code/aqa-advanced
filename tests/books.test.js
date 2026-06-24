const axios = require('axios');


describe('Get books',()=>{
    test('Get books list', async () => {
	const response = await axios.get('https://demoqa.com/BookStore/v1/Books');
	expect(response.status).toBe(200);
	expect(response.data.books[0].title).toBe('Git Pocket Guide');
});
    test('Get books` info', async () => {
	const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574');
	const bookData = response.data;
	expect(bookData.title).toBe('Understanding ECMAScript 6');
	expect(bookData.isbn).toBe('9781593277574');
	expect(response.status).toBe(200);
});
})

describe('Add books',()=>{
test('Add book to user profile ', async () => {
	const responseAuth = await axios.post('https://demoqa.com/Account/v1/Login', {
		userName: 'alina-t',
		password: 'Bondarenko1!',
	});
	const response = await axios.post(
		'https://demoqa.com/BookStore/v1/Books',
		{
			userId: '4fdbaf65-9f94-4d12-aedb-347feba17f17',
			collectionOfIsbns: [
				{
					isbn: '9781449365035',
				},
			],
		},
		{
			headers: {
				Authorization: `Bearer ${responseAuth.data.token}`,
			},
		},
	);
	expect(response.status).toBe(201);
});
})


describe('Delete books',()=>{
test('Delete book from user profile', async () => {
	const responseAuth = await axios.post('https://demoqa.com/Account/v1/Login', {
		userName: 'alina-t',
		password: 'Bondarenko1!',
	});
	const response = await axios.delete('https://demoqa.com/BookStore/v1/Book', {
		data: {
			isbn: '9781449337711',
			userId: '4fdbaf65-9f94-4d12-aedb-347feba17f17',
		},
		headers: {
			Authorization: `Bearer ${responseAuth.data.token}`,
		},
	});
	expect(response.status).toBe(204);
});
})


// test('Get books` info', async () => {
// 	const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574');
// 	const bookData = response.data;
// 	expect(bookData.title).toBe('Understanding ECMAScript 6');
// 	expect(bookData.isbn).toBe('9781593277574');
// 	expect(response.status).toBe(200);
// });
