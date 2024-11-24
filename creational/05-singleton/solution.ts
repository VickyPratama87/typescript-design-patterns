namespace SingletonSolution {
	class Me {
		private static instance: Me;
		private firstName: string;
		private lastName: string;

		public static getInstance(): Me {
			if (!Me.instance) {
				Me.instance = new Me();
			}

			return Me.instance;
		}

		getFullName(): string {
			// akses db, selct user ...
			this.firstName = 'firstname';
			this.lastName = 'lastname';

			return `${this.firstName} ${this.lastName}`;
		}
	}

	const profile = Me.getInstance();
	console.log(profile.getFullName()); // firstname lastname

	const profile2 = Me.getInstance();
	console.log(profile2.getFullName()); // firstname lastname

	console.log(profile === profile2); // true
}
