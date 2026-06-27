const { default: axios } = require('axios');

class UserController {
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'https://demoqa.com',
			validateStatus: () => true,
		});
	}
	async login() {
		return await this.axiosInstance.post('/Account/v1/Login', {
			userName: 'alina-t',
			password: 'Bondarenko1!',
		});
	}
	async register(user) {
		return await this.axiosInstance.post('/Account/v1/User', {
			userName: user.userName,
			password: user.password,
		});
	}
}
module.exports = new UserController();
