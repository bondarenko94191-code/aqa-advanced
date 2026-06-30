const { default: axios } = require('axios');

class BookController {
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'https://demoqa.com',
			validateStatus: () => true,
		});
	}
	async getBookList() {
		return await this.axiosInstance.get('/BookStore/v1/Books');
	}
	async getBookInfo() {
		return await this.axiosInstance.get('/BookStore/v1/Book?ISBN=9781593277574');
	}
	async addBook(token) {
		return await this.axiosInstance.post(
			'BookStore/v1/Books',
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
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}
	async deleteBook(token) {
		return await this.axiosInstance.delete('BookStore/v1/Book', {
			data: {
				isbn: '9781449365035',
				userId: '4fdbaf65-9f94-4d12-aedb-347feba17f17',
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

module.exports = new BookController();
