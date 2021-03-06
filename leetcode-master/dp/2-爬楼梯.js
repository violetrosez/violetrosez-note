/**
 * 爬楼梯问题
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？（给定 n 是一个正整数）
 */

// 思路：
// 第 i 阶台阶只可能从第 i-1 或 i-2 个台阶爬上来的，所以第 i 个台阶的爬法就是 i-1 与 i-2 总爬法之和
function dp(n) {
  let f = [];
  f[1] = 1;
  f[2] = 2;
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

console.log(dp(4));
