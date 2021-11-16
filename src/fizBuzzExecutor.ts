import { FizzBuzz } from "../src/fizzbuzz";

export class FizzBuzzExecutor {
	protected obj: Object

	constructor(obj: Object) {
		this.obj = obj;
	}

	public execute(i: number, j: number): void {
		const fizzBuzz = new FizzBuzz();
		for (i; i <= j; i++) {
			console.log(fizzBuzz.execute(i));
		}
	}
}
