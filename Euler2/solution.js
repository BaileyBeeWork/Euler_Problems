function Euler2() {
  
    var last_term = 0;      //x
    var current_term = 1;   //y
    var next_term = 0;          //z
    var result = 0;

    while (current_term < 4000000){
        next_term = last_term + current_term; //z = x + y
        last_term = current_term;  //x = y
        current_term = next_term; //y = z
        if(current_term % 2 === 0){
            result += current_term;
        }
    }
    return result;
}

console.log(Euler2());
