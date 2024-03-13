function echo<T>(arg: T): T {
  return arg;
}

let a = echo(1); // a: number

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const result = swap([7, "seven"]); // result: [string, number]