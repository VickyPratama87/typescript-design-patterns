// Name  | Brand
// ---------------
// Mobil | Innova
// Ban   | -
// Besi  | -

interface BaseData {
	getData(): {
		name: string;
		brand: string;
	};
}

interface IProduct extends BaseData {
	name: string;
	brand: string;
}

interface IMaterial {
	name: string;
	qty: number;
}

class Product implements IProduct {
	name: string;
	brand: string;

	constructor(name: string, brand: string) {
		this.name = name;
		this.brand = brand;
	}

	getData() {
		return {
			name: this.name,
			brand: this.brand,
		};
	}
}

class Material implements IMaterial {
	name: string;
	qty: number;

	constructor(name: string, qty: number) {
		this.name = name;
		this.qty = qty;
	}

	getData() {
		return {
			name: this.name,
			qty: this.qty,
		};
	}
}

let list: any[] = [];

const product = new Product('Mobil', 'Innova');
list.push(product.getData());

const material1 = new Material('Ban', 4);
list.push(material1.getData());

const material2 = new Material('Besi', 10);
list.push(material2.getData());

console.log(list);
// Output:
// [
//   { name: 'Mobil', brand: 'Innova' },
//   { name: 'Ban', qty: 4 },
//   { name: 'Besi', qty: 10 }
// ]
