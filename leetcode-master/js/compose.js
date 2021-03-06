// 1 compose
// 题目描述:实现一个 compose 函数 将 compose(a,b,c)(...args) 转化成 a(b(c(...args)))
// 用法如下:
// function fn1(x) {
//   return x + 1;
// }
// function fn2(x) {
//   return x + 2;
// }
// function fn3(x) {
//   return x + 3;
// }
// function fn4(x) {
//   return x + 4;
// }
// const a = compose(fn1, fn2, fn3, fn4);
// console.log(a(1)); // 1+4+3+2+1=11
function compose(...fn) {
  if (fn.length == 1) return fn[0];
  return fn.reduce((pre, cur) => (...args) => {
    return pre(cur(...args));
  });
}

function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  console.log(x);
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
