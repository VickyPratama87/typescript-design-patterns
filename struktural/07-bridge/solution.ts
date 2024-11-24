/*
                                       Store

            Product Type                              Price

Fashion(price)       Computer(price)            Cheap     Expensive
*/

interface IPrice {
	name: string;
	price: number;
	sellPrice(): string;
}

class Cheap implements IPrice {
	name: string = 'Murah';
	price: number;

	constructor(price: number) {
		this.price = price;
	}

	sellPrice(): string {
		return `${this.name} yaitu Rp ${this.price}`;
	}
}

class Expensive implements IPrice {
	name: string = 'Mahal';
	price: number;

	constructor(price: number) {
		this.price = price;
	}

	sellPrice(): string {
		return `${this.name} yaitu Rp ${this.price}`;
	}
}

interface IProduct {
	name: string;
}

abstract class Product implements IProduct {
	name: string;
	price: IPrice;

	constructor(name: string, price: IPrice) {
		this.name = name;
		this.price = price;
	}

	abstract sell(): void;
}

class Fashion extends Product {
	sell(): void {
		console.log(`Jual fashion ${this.name} dengan harga ${this.price.sellPrice()}`);
	}
}

class Computer extends Product {
	sell(): void {
		console.log(`Jual computer ${this.name} dengan harga ${this.price.sellPrice()}`);
	}
}

const fashionCheap = new Fashion('Dress', new Cheap(30000));
console.log(fashionCheap.sell());

const computerExpensive = new Computer('Macbook Pro 2024', new Expensive(20000000));
console.log(computerExpensive.sell());
