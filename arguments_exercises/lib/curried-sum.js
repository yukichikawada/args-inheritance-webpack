function curriedSum(numArgs) {
  let numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(el => {
        sum += el;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  };
}

const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

// Function.prototype.curry = function(numArgs) {
//   const numbers = [];
//   const fn = this;
//
//   return function _curry(num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       return fn.apply(null, numbers);
//     } else {
//       return _curry;
//     }
//   };
// };

Function.prototype.curry = function(numArgs) {
  const fn = this;
  let numbers = [];

  return function _curry(...args) {
    // debugger;
    numbers = numbers.concat(Array.from(args));
    if (numbers.length === numArgs) {
      return fn(...numbers);
    } else {
      return _curry;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
// console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
// console.log(sumThree.curry(3)(4, 20)(6)); // == 30
