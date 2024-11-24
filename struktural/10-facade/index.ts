import Operation from './OperationService.ts';

const calculate1 = (): number => {
	let num1: number = 20;
	let num2: number = 30;

	return Operation(num1, num2);
};

const calculate2 = (): number => {
	let num1: number = 10;
	let num2: number = 5;

	return Operation(num1, num2);
};

console.log(calculate1()); // 12.5
console.log(calculate2()); // 3.75
