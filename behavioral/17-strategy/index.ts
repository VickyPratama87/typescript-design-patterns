interface NumericConverter {
	convertNumber(number: number): void;
}

class NumberConvertion {
	private strategy: NumericConverter;

	constructor(strategy: NumericConverter) {
		this.strategy = strategy;
	}

	execute(num: number): void {
		this.strategy.convertNumber(num);
	}
}

class NumberToCurrency implements NumericConverter {
	convertNumber(num: number): void {
		console.log(
			num.toLocaleString('id-ID', {
				minimumFractionDigits: 2,
				style: 'currency',
				currency: 'IDR',
			})
		);
	}
}

class NumberToDecimalSeparator implements NumericConverter {
	convertNumber(num: number): void {
		console.log(
			num.toLocaleString('id-ID', {
				minimumFractionDigits: 2,
			})
		);
	}
}

class NumberToDate implements NumericConverter {
	convertNumber(num: number): void {
		console.log(new Date(num * 1000).toUTCString());
	}
}

const mataUang = new NumberConvertion(new NumberToCurrency());
mataUang.execute(2000000); // Rp2,000,000.00

const decimal = new NumberConvertion(new NumberToDecimalSeparator());
decimal.execute(2000000); // 2,000,000.00

const date = new NumberConvertion(new NumberToDate());
date.execute(2000000); // Sat, 24 Jan 1970 03:33:20 GMT
