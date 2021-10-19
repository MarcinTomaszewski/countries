var obj = {
  a: 1,
  b: 'string',
  c: {
    random: Math.random(),
    e: [1, 2, 3, 4, 5]
  }
}
const obj2 = { ...obj, c: { ...obj.c, e: [...obj.c.e] } };

console.log(obj2);