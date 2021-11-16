import { FizzBuzz } from "../src/fizzbuzz";

export class FizzBuzzExecutor {
	protected obj: Object

	constructor(obj: Object) {
		this.obj = obj;
	}

	public execute(i: number, j: number): void {
		const fizzBuzz = new FizzBuzz();
		for (let n = i; i <= j; i++) {
			fizzBuzz.execute(i);
		}
	}
}
