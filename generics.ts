function echo<T>(arg: T): T {
  return arg;
}

let a = echo(1); // a: number

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const result = swap([7, "seven"]); // result: [string, number]

// Generic Constraints
// 只允许传入包含 .length 属性的变量
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str2 = echoWithLength("str");
const obj = echoWithLength({ length: 10, width: 10 });
const arr2 = echoWithLength([1, 2, 3]);
echoWithLength(7); // Error