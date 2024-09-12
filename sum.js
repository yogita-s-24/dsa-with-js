

function add(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i
  }
  return num*(num + 1)/2
}

console.log(add(5));