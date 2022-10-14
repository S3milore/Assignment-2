//let arr = [];

function counter(val, step) {
    let arr = [val];
    for (let i = 0; i < 1000; i += step)
      arr.push(val += step);
    for (j = 0; j <= 1000; j++) {
      if (arr[j] >= 1000) {
        do {
          arr.pop();
        } while (arr[j] > 1000)
        return arr;
      }
    }
  }
  function numGen(max, min) {
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      return result;
    };
  console.log(counter(10, 100));
  console.log(numGen(20, 2))
  