class Truck {
	private qty: number;

	constructor(qty: number) {
		this.qty = qty;
	}

	deliver(): void {
		console.log(`Delivering ${this.qty} items by truck`);
	}
}

class Ship {
	private qty: number;

	constructor(qty: number) {
		this.qty = qty;
	}

	deliver(): void {
		console.log(`Delivering ${this.qty} items by ship`);
	}
}

let type = 'deliver_by_land';
if (type == 'deliver_by_land') {
	new Truck(100);
} else if (type == 'deliver_by_sea') {
	new Ship(100);
}
