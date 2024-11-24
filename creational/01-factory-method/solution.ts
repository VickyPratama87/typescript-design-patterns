namespace FactorySolution {
	interface Logistic {
		qty: number;
		deliver(): void;
	}

	class Truck implements Logistic {
		public qty: number;

		constructor(qty: number) {
			this.qty = qty;
		}

		deliver(): void {
			console.log(`Delivering ${this.qty} items by truck`);
		}
	}

	class Ship implements Logistic {
		public qty: number;

		constructor(qty: number) {
			this.qty = qty;
		}

		deliver(): void {
			console.log(`Delivering ${this.qty} items by ship`);
		}
	}

	type LogisticType = {
		type: string;
		qty: number;
	};

	interface Factory {
		create(options: LogisticType): Logistic;
	}

	class LogisticFactory implements Factory {
		create(options: LogisticType): Logistic {
			switch (options.type) {
				case 'deliver_by_land':
					return new Truck(options.qty);
				case 'deliver_by_sea':
					return new Ship(options.qty);
				default:
					throw new Error('Invalid logistic type');
			}
		}
	}

	const logistic = new LogisticFactory();

	const byLand = logistic.create({ type: 'deliver_by_land', qty: 100 });
	console.log(byLand.deliver());

	const bySea = logistic.create({ type: 'deliver_by_sea', qty: 150 });
	console.log(bySea.deliver());
}
