// type inference
let str = 'hello';

// union types
let numberOrString: number | string

function getLength(input:string | number): number {
  const str = input as string;
  if (str.length) {
    return str.length;
  } else {
    return input.toString().length;
  }
}

// type guards
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length;
  } else {
    return input.toString().length;
  }
}