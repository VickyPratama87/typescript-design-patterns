interface ICovid {
	getData(): Promise<{
		confirmed: number;
		recovered: number;
		deaths: number;
	}>;
}

class Covid implements ICovid {
	country: string;

	constructor(country: string) {
		this.country = country;
	}

	async getData() {
		const response = await fetch(`https://covid19.mathdro.id/api/countries/${this.country}`);
		const data = await response.json();

		return {
			confirmed: data.confirmed.value,
			recovered: data.recovered.value,
			deaths: data.deaths.value,
		};
	}
}

const getDataCovid = async () => {
	const covid = new Covid('id');
	console.log(await covid.getData());
};

getDataCovid();
