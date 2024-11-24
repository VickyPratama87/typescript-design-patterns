/*
   1. Name < 20 characters
   2. Price < 1jt
   3. Weight < 5kg
*/

namespace COR {
	class Product {
		name: string;
		price: number;
		weight: number;

		constructor(name: string, price: number, weight: number) {
			this.name = name;
			this.price = price;
			this.weight = weight;
		}

		validate() {
			if (this.name.length > 20) {
				return 'Nama produk harus dibawah 20 karakter';
			}

			if (this.price > 1000000) {
				return 'Harga produk harus dibawah 1jt';
			}

			if (this.weight > 5) {
				return 'Berat produk harus dibawah 5kg';
			}

			return this;
		}
	}

	const product = new Product('Sepatu', 1250000, 7);
	console.log(product.validate());
}
