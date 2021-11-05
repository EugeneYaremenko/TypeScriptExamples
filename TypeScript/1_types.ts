const isFatching: boolean = true;
const isLoading: boolean = false;
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const numberArr: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArrGen: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "World", "!"];

// Tuple
const contact: [string, number] = ["Eugene", 1234];

// Any
let variable: any = 342;
variable = "New String";
variable = [];

//===
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Eugene");

// Newer
function throwError(message: string): never {
  throw new Error(message);
}

// function infinite(): never {
//   while(true){
//     ***
//   }
// }

// Type
type Login = string;

const login: Login = "admin";
// const login2: Login = 2;

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";
// const id3: ID = true;

type SomeType = string | null | undefined;
