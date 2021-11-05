const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ["Hello", "Eugene"];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
