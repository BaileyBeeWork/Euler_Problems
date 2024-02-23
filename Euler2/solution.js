function Euler2() {
  var last_term = 0;
  var current_term = 1;
  var next_term = 0;
  var result = 0;

  while (current_term < 4000000) {
    next_term = last_term + current_term;
    last_term = current_term;
    current_term = next_term;
    if (current_term % 2 === 0) {
      result += current_term;
    }
  }
  return result;
}

console.log(Euler2());
