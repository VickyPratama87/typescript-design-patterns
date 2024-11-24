namespace AdapterSolution {
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

	// Cara I
	class MaterialAdapter implements BaseData {
		private adapter: Material;

		constructor(adapter: Material) {
			this.adapter = adapter;
		}

		getData() {
			return {
				name: this.adapter.name,
				brand: '',
			};
		}
	}

	let list: any[] = [];

	const product = new Product('Mobil', 'Innova');
	list.push(product.getData());

	const material1 = new MaterialAdapter(new Material('Ban', 4));
	list.push(material1.getData());

	const material2 = new MaterialAdapter(new Material('Besi', 10));
	list.push(material2.getData());

	console.log(list);
	// Output:
	// [ { name: 'Mobil', brand: 'Innova' },
	//   { name: 'Ban', brand: '' },
	//   { name: 'Besi', brand: '' } ]

	// Cara II
	enum AdapterType {
		PRODUCT,
		MATERIAL,
	}

	class DataAdapter implements BaseData {
		public name: string;
		public brand: string;
		public qty: number;
		public type: AdapterType;

		constructor({ name = '', brand = '', qty = 0 } = {}, type: AdapterType) {
			this.name = name;
			this.brand = brand;
			this.qty = qty;
			this.type = type;
		}

		getData() {
			if (this.type === AdapterType.PRODUCT) {
				const product = new Product(this.name, this.brand);
				return {
					name: product.name,
					brand: product.brand,
				};
			} else if (this.type === AdapterType.MATERIAL) {
				const material = new Material(this.name, this.qty);
				return {
					name: material.name,
					brand: '',
				};
			}

			return {
				name: '',
				brand: '',
			};
		}
	}

	let list2: any[] = [];

	const data1 = new DataAdapter({ name: 'Mobil', brand: 'Innova' }, AdapterType.PRODUCT);
	list2.push(data1.getData());

	const data2 = new DataAdapter({ name: 'Ban', qty: 4 }, AdapterType.MATERIAL);
	list2.push(data2.getData());

	const data3 = new DataAdapter({ name: 'Besi', qty: 10 }, AdapterType.MATERIAL);
	list2.push(data3.getData());

	console.log(list2);
	// Output:
	// [ { name: 'Mobil', brand: 'Innova' },
	//   { name: 'Ban', brand: '' },
	//   { name: 'Besi', brand: '' } ]
}
