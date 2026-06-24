const axios = require('axios');
test('Unathorized user is not able to add book to profile', async () => {
	const response = await axios.post(
		'https://demoqa.com/BookStore/v1/Books',
		{
			userId: '',
			collectionOfIsbns: [
				{
					isbn: '9781491904244',
				},
			],
		},
		{
			validateStatus: () => true,
		},
	);
	expect(response.data.message).toBe('User not authorized!');
});

test('Authorize user', async () => {
	const response = await axios.post('https://demoqa.com/Account/v1/Login', {
		userName: 'alina-t',
		password: 'Bondarenko1!',
	});
	expect(response.data.token).toBeDefined;
});
