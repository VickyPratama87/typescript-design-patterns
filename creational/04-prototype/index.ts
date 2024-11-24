namespace PrototypePattern {
	class User {
		public name: string;
		public username: string;
		public password: string;
		public email: string;
		public phone: string;

		constructor(name: string, username: string, password: string, email: string, phone: string) {
			this.name = name;
			this.username = username;
			this.password = password;
			this.email = email;
			this.phone = phone;
		}

		public clone(): this {
			const clone = Object.assign({}, this);
			return clone;
		}
	}

	// const user1 = new User('Vicky', 'vicky87', '555555', 'vicky@gmail.com', '0897');
	// const user2 = new User('Vicky', 'vicky87', '555555', 'vicky@gmail.com', '0897');
	// const user3 = new User('Vicky', 'vicky87', '555555', 'vicky@gmail.com', '0897');
	// const user4 = new User('Vicky', 'vicky87', '555555', 'vicky@gmail.com', '0897');

	const user1 = new User('Vicky', 'vicky87', '555555', 'vicky@gmail.com', '0897');
	const user2 = user1.clone();
	console.log(user2);

	user2.username = 'vicky57';
	user2.phone = '082237282128';
	console.log(user2);
}
