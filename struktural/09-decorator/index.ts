class Handphone {
	name: string;
	price: number;

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}

	getHandphone() {
		return {
			name: this.name,
			price: this.price,
		};
	}
}

const handphoneA = new Handphone('Samsung A10', 2000000);
console.log(handphoneA.getHandphone());

const handphoneAFromImport = Object.assign(handphoneA.getHandphone(), { tax: 100000 });
handphoneAFromImport.price += 1000000;
console.log(handphoneAFromImport);

const handphoneAFromExport = Object.assign(handphoneA.getHandphone(), { tax: 200000 });
handphoneAFromExport.price += 2000000;
console.log(handphoneAFromExport);
