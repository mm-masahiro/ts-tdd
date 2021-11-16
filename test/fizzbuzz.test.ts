import { FizzBuzz } from "../src/fizzbuzz";
import { FizzBuzzExecutor } from "../src/fizBuzzExecutor";

describe("FizzBuzzは", () => {
	test("3の倍数を受け取るとFizzを返す", () => {
		expect(new FizzBuzz().execute(3)).toEqual("Fizz");
	});
	test("5の倍数を受け取るとBuzzを返す", () => {
		expect(new FizzBuzz().execute(5)).toEqual("Buzz");
	});
	test("15の倍数を受け取るとFizzBuzzを返す", () => {
		expect(new FizzBuzz().execute(15)).toEqual("FizzBuzz");
	});
	test("上記以外の数を受け取るとその数字を返す", () => {
		expect(new FizzBuzz().execute(7)).toEqual("7");
	});
})

// describe("FizzBuzzExcutorは", () => {
// 	test("1から100までFizzBuzzする", () => {
// 		const fizzBuzz = {} as FizzBuzz;
// 		const execute = jest.fn();

// 		fizzBuzz.execute = execute;
// 		new FizzBuzzExecutor(fizzBuzz).execute(1, 100)

// 		// toHaveBeenCalledTimesはモック化された対象の関数が何回呼び出しされたかを確認することが出来るMatcher
// 		expect(execute).toHaveBeenCalledTimes(100);
// 	})
// })
