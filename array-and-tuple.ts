let arrOfNumbers: number[] = [1, 2, 3, 4, 5];
arrOfNumbers.push(6);

// array like object
function test() {
  console.log(arguments)
}

// tuple
// 只能 push 两个元素, 且元素类型必须对应
let user: [string, number] = ['viking', 20];
user.push('JOJO');
user.push(20);