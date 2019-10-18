module.exports = function zeros(expression) {
  // your solution
  let input = []; 
  input = expression.split(/\*/g); // separate input expression on '*'
  let twos = 0; // count of multiple 2
  let fives = 0; // count of multiple 5

  for (let i = 0; i < input.length; i++) {
    let n = parseInt(input[i]); // take number from  input[i] element
    // case of two factorials
    if (input[i].match(/(!!)/)) {
      // cycle with step 2
      for (let k = n; k > 0; k -= 2) {
        let divtwo = k;
        let divfive = k;
        // if number is multiple 2
        while ((divtwo % 2 === 0) && (divtwo > 0)) {
          divtwo = Math.floor(divtwo/2);
          twos ++;  
        }
        // if number is multiple 5  
        while ((divfive % 5 === 0) && (divfive > 0)) {
          divfive = Math.floor(divfive/5);
          fives ++;      
        }
      }  
    }
    //case of one factorial
    else {
      // cycle with step 1
      for (let m = n; m > 0; m--) {
        let divtwo = m;
        let divfive = m;
        while ((divtwo % 2 === 0) && (divtwo > 0)) {
          divtwo = Math.floor(divtwo/2);
          twos ++;    
        }  
        while ((divfive % 5 === 0) && (divfive > 0)) {
          divfive = Math.floor(divfive/5);
          fives ++;  
        }
      }
    }
  }
  // count of zeroes is equal to less number of two and fives
  if (twos > fives) return fives;
  else return twos;
}
