class User {
	private name: string;
	private username: string;
	private password: string;
	private email: string;
	private phone: string;

	constructor(name: string, username: string, password: string, email: string, phone: string) {
		this.name = name;
		this.username = username;
		this.password = password;
		this.email = email;
		this.phone = phone;
	}
}

const userVicky = new User('Vicky', 'vicky123', '12345', 'vicky@gmail.com', '123456789');
const userMeysa = new User('Meysa', 'meysa123', '12345', '', '');
const userPuput = new User('Puput', 'puput123', '12345', '', '');
