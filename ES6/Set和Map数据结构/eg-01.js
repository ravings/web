const set = new Set([1, 2, 3, 4, 5, 5]);
// console.log([...set]);

// set.add(value)：添加某个值，返回Set结构本身
set.add(6);
set.add('hello').add('word');
// console.log([...set]);

// set.delete(value)：删除某个值，返回一个布尔值
set.delete(2);

// set.clear()：清除所有成员，没有返回值
set.clear();

// Map
const ma = new Map([['张三', 95], ['李四', 75], ['王五', 85]]);
// console.log(ma.get('张三'));

// 遍历
for (const key of ma.keys()) {
  // console.log(key);
}
console.log([...ma.keys()]);

for (const value of ma.values()) {
  // console.log(value);
}

ma.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});

// Map转为对象
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (const [key, value] of strMap) {
    obj[key] = value;
  }
  return obj;
}
console.log(strMapToObj(ma));
