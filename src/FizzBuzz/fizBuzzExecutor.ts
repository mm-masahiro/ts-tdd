import { FizzBuzz } from "./fizzbuzz";

export class FizzBuzzExecutor {
	protected obj: Object

	constructor(obj: Object) {
		this.obj = obj;
	}

	public execute(i: number, j: number): String | undefined {
		const fizzBuzz = new FizzBuzz();
		for (i; i <= j; i++) {
			return fizzBuzz.execute(i);
		}
	}
}
