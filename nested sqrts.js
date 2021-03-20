/* 10*root(10*root(...))
 */

let a = 10;

for (let i = 0; i < 1000; i++) {
  let b = 10 * Math.sqrt(a);
  console.log(b);
  a = b;
}
