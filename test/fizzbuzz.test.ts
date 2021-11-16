import { FizzBuzz } from "../src/fizzbuzz";
describe("FizzBuzzは", () => {
	test("3の倍数を受け取るとFizzを返す", () => {
		expect(new FizzBuzz().execute(3)).toEqual("Fizz");
	});
})
