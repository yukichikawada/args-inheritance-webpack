function sumArguments() {
  let sum = 0;

  const args = Array.from(arguments);

  args.forEach((el) => {
    sum += el;
  });

  return sum;
}

// console.log(sumArguments(1, 2, 3, 4, 5));

function sumRest(...args) {
  let sum = 0;

  args.forEach((el) => {
    sum += el;
  });

  return sum;
}

// console.log(sumRest(1, 2, 3, 4, 5));
