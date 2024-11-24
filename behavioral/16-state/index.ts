namespace State {
	interface IProduct {
		name: string;
		saveAsFeaturedProduct(): void;
	}

	class FeaturedProduct {
		private state: IProduct;

		constructor(state: IProduct) {
			this.state = state;
		}

		setFeaturedProduct(state: IProduct): void {
			this.state = state;
		}

		getFeaturedProduct(): void {
			console.log(this.state);
		}

		publish(): void {
			this.state.saveAsFeaturedProduct();
		}
	}

	class FashionProduct implements IProduct {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		saveAsFeaturedProduct(): void {
			console.log(`Set product ${this.name} is saved as featured product`);
		}
	}

	class ElectronicProduct implements IProduct {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		saveAsFeaturedProduct(): void {
			console.log(`Set product ${this.name} is saved as featured product`);
		}
	}

	const baju = new FashionProduct('Baju');
	const celana = new FashionProduct('Celana');
	const tv = new ElectronicProduct('TV');

	const featuredProduct = new FeaturedProduct(baju);
	featuredProduct.publish();
	featuredProduct.getFeaturedProduct();

	featuredProduct.setFeaturedProduct(tv);
	featuredProduct.publish();
	featuredProduct.getFeaturedProduct();
}
