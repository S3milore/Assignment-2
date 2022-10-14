//A counter that counts up to 1000, allows user specify the
//count step and generates random numbers without 'math.random()'
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
    console.log(counter(10, 100));
    