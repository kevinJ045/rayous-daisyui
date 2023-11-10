import { Widget } from "rayous";



/**
 * A number adder to make things added
 * @param number1 First number to add
 * @param number2 Second nymber to add
 * @returns number
 */
export function addNumbers(number1: number, number2: number){
	return number1 + number2;
}

let w = new Widget({
	class: 'shsh'
})