function Euler1(total) {
    let sum = 0;
    for (let i = 3; i < total; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(Euler1(1000));
  