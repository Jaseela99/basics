 function sum(a, b) {
    return a + b;
  }
  module.exports = sum; 

  /* //string

  function reverseStr(str) {
    return str
      .split('')
      .reverse()
      .join('')
      .toLowerCase();
  }
  
  
  // TENET, Madam, Radar, mom - palindrome
  
  // Unit Test
  function checkPalindrome(str) {
  
    var reversed = reverseStr(str);
  
    if (str.toLowerCase() === reversed) {
      return true
    } else {
      return false
    }
  }
  
  module.exports = {
    reverseStr,
    checkPalindrome
  }; */


  //integration test
  // 0,1
// ,1,2,3,5,8,13,21 ====,0+1,1+1,2+1==adds numbers next to it
// will create a fib series till n items
/* const fib = (n) => {
  var arr = [0, 1];
  var first = 0;
  var second = 1;
  var third;

  for (var u = 2; u < n; u++) {
    third = sum(first, second);
    first = second;
    second = third;

    arr.push(third);
  }

  return arr;
}

module.exports = fib; */