namespace BuilderSolution {
	// Cara I
	class User {
		public name: string = '';
		public username: string = '';
		public password: string = '';
		public email: string = '';
		public phone: string = '';
		public age: number = 0;

		getDetails(): string {
			return `Name = ${this.name}, Username = ${this.username}`;
		}
	}

	class UserBuilder {
		private user: User;

		constructor() {
			this.user = new User();
		}

		setName(value: string): UserBuilder {
			this.user.name = value;
			return this;
		}

		setUsername(value: string): UserBuilder {
			this.user.username = value;
			return this;
		}

		setPassword(value: string): UserBuilder {
			this.user.password = value;
			return this;
		}

		setEmail(value: string): UserBuilder {
			this.user.email = value;
			return this;
		}

		setPhone(value: string): UserBuilder {
			this.user.phone = value;
			return this;
		}

		setAge(value: number): UserBuilder {
			this.user.age = value;
			return this;
		}

		build(): User {
			return this.user;
		}
	}

	const userNita = new UserBuilder().setName('Nita').setUsername('nita123').setAge(22).build();

	console.log(userNita); // User { name: 'Nita', username: 'nita123', password: '', email: '', phone: '', age: 22 }
	console.log(userNita.getDetails()); // Name = Nita, Username = nita123

	// Cara II
	class User2 {
		public name: string;
		public username: string;
		public password: string;
		public email: string;
		public phone: string;
		public age: number;

		constructor({ name = '', username = '', password = '', email = '', phone = '', age = 0 } = {}) {
			this.name = name;
			this.username = username;
			this.password = password;
			this.email = email;
			this.phone = phone;
			this.age = age;
		}

		getDetails(): string {
			return `Name = ${this.name}, Username = ${this.username}`;
		}
	}

	const userNita2 = new User2({ name: 'Nita', username: 'nita123', age: 22 });
	console.log(userNita2); // User2 { name: 'Nita', username: 'nita123', password: '', email: '', phone: '', age: 22 }
	console.log(userNita2.getDetails()); // Name = Nita, Username = nita123
}
