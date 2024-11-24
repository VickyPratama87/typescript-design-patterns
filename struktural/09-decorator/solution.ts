namespace DecoratorSolution {
	interface IHandphone {
		getHandphone(): any;
	}

	class Handphone implements IHandphone {
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

	abstract class HandphoneDecorator implements IHandphone {
		protected handphone: Handphone;

		constructor(handphone: Handphone) {
			this.handphone = handphone;
		}

		abstract getHandphone(): any;
	}

	class HandphoneImportDecorator extends HandphoneDecorator {
		getHandphone() {
			return {
				name: this.handphone.name,
				price: this.handphone.price + 1000000,
				tax: 100000,
			};
		}
	}

	class HandphoneExportDecorator extends HandphoneDecorator {
		getHandphone() {
			return {
				name: this.handphone.name,
				price: this.handphone.price + 2000000,
				tax: 200000,
			};
		}
	}

	const handphoneA = new Handphone('Samsung A10', 2000000);
	console.log(handphoneA.getHandphone());

	const handphoneAFromImport = new HandphoneImportDecorator(handphoneA);
	console.log(handphoneAFromImport.getHandphone());

	const handphoneAFromExport = new HandphoneExportDecorator(handphoneA);
	console.log(handphoneAFromExport.getHandphone());
}
