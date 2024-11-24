namespace Observer {
	interface Subject {
		attach(observer: Observer): void;
		detach(observer: Observer): void;
		notify(): void;
	}

	interface Observer {
		name: string;
		update(subject: Subject): void;
	}

	class PromoSubject implements Subject {
		public isPromo: boolean = false;
		private observers: Observer[] = [];

		attach(observer: Observer): void {
			const isExist: boolean = this.observers.includes(observer);
			if (isExist) {
				return console.log(`Observer ${observer.name} already attached`);
			}

			this.observers.push(observer);
			console.log(`Observer ${observer.name} successfully attached`);
		}

		detach(observer: Observer): void {
			const observerIndex = this.observers.indexOf(observer);
			if (observerIndex === -1) {
				return console.log(`Observer ${observer.name} not found`);
			}

			this.observers.splice(observerIndex, 1);
			console.log(`Observer ${observer.name} successfully detached`);
		}

		notify(): void {
			for (const observer of this.observers) {
				observer.update(this);
			}
		}

		setPromo(status: boolean): void {
			this.isPromo = status;
			this.notify();
		}
	}

	class Product implements Observer {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		update(subject: Subject): void {
			if (subject instanceof PromoSubject && subject.isPromo) {
				console.log(`Product ${this.name} is on promo`);
			}
		}
	}

	const promo = new PromoSubject();

	const baju = new Product('Baju');
	const celana = new Product('Celana');
	const topi = new Product('Topi');

	promo.attach(baju);
	promo.attach(celana);
	promo.attach(topi);

	promo.setPromo(true);
	promo.detach(topi);

	console.log(promo);
}
