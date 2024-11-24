enum ComputerType {
	PC = 'pc',
	LAPTOP = 'laptop',
}

abstract class Computer {
	protected type: ComputerType;
	protected monitor: string;
	constructor(type: ComputerType, monitor: string) {
		this.type = type;
		this.monitor = monitor;
	}

	abstract getModel(): string;
}

class PC extends Computer {
	constructor(monitor: string) {
		super(ComputerType.PC, monitor);
	}

	getModel(): string {
		return `${this.type} with monitor: ${this.monitor}`;
	}
}

class Laptop extends Computer {
	constructor(monitor: string) {
		super(ComputerType.LAPTOP, monitor);
	}

	getModel(): string {
		return `${this.type} with monitor: ${this.monitor}`;
	}
}

enum MonitorType {
	LED = 'led',
	IPS = 'ips',
}

class LEDComputerFactory {
	static buildComputer(type: ComputerType): Computer {
		switch (type) {
			case ComputerType.PC:
				return new PC(MonitorType.LED);
			case ComputerType.LAPTOP:
				return new Laptop(MonitorType.LED);
			default:
				throw new Error('Invalid computer type');
		}
	}
}

class IPSComputerFactory {
	static buildComputer(type: ComputerType): Computer {
		switch (type) {
			case ComputerType.PC:
				return new PC(MonitorType.IPS);
			case ComputerType.LAPTOP:
				return new Laptop(MonitorType.IPS);
			default:
				throw new Error('Invalid computer type');
		}
	}
}

class ComputerFactory {
	static buildComputer(computerType: ComputerType, monitorType: MonitorType): Computer {
		switch (monitorType) {
			case MonitorType.LED:
				return LEDComputerFactory.buildComputer(computerType);
			case MonitorType.IPS:
				return IPSComputerFactory.buildComputer(computerType);
			default:
				throw new Error('Invalid monitor type');
		}
	}
}

const pcLed = ComputerFactory.buildComputer(ComputerType.PC, MonitorType.LED);
console.log(pcLed.getModel()); // PC with monitor: led

const laptopIps = ComputerFactory.buildComputer(ComputerType.LAPTOP, MonitorType.IPS);
console.log(laptopIps.getModel()); // LAPTOP with monitor: ips
