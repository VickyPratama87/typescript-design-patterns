class Me {
	private firstName: string;
	private lastName: string;

	getFullName(): string {
		// akses db, selct user ...
		this.firstName = 'firstname';
		this.lastName = 'lastname';

		return `${this.firstName} ${this.lastName}`;
	}
}

const fullName = new Me();
console.log(fullName.getFullName()); // firstname lastname

const fullName2 = new Me();
console.log(fullName2.getFullName()); // firstname lastname

console.log(fullName === fullName2); // false
