// 字符串的遍历器接口
let arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  // console.log(i);
}
let obj_1 = {
  first: '1',
  last: '2'
}

// JSON.stringify()方法：将字符串类型转换为json数据类型
const str = 'this a string';
JSON.stringify(str);
console.log(JSON.stringify(str));

// 字符串模板
const x = 1;
const y = 2;
console.log(`${x + y}`);
let obj = {
  x: 2,
  y: 4
}
console.log(`${obj.x * obj.y}`)
function fn() {
  return 'this is a function';
}
console.log(`${fn()}`)
