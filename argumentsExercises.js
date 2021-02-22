// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// function sum(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3, 4, 5));

// Function.prototype.myBind = function () {
//   const ctx = arguments[0];
//   const args = [...arguments];
//   const slicedArgs = args.slice(1);
//   const that = this;

//   return function () {
//     that.apply(ctx, slicedArgs.concat(...arguments));
//   };
// };

Function.prototype.myBind = function (...args) {
  const ctx = args[0];
  const slicedArgs = args.slice(1);
  const that = this;

  return function (...args) {
    that.apply(ctx, slicedArgs.concat(args));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
const mbv = markov.says.myBind(pavlov);
mbv("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

// function curriedSum(totalNums) {
//   let sum = 0;
//   return function _curry(num) {
//     sum += num;
//     if (--totalNums === 0) return sum;
//     return _curry;
//   }
// }

// // const sum = curriedSum(4);
// // console.log(sum(5)(30)(20)(1)); // => 56

// Function.prototype.curry = function (numArgs) {
//   const arr = [];
//   const that = this;
//   return function _curry(arg) {
//     arr.push(arg);
//     if (arr.length < numArgs) return _curry;
//     return that.apply(that, arr);
//   };
// };
Function.prototype.curry = function (numArgs) {
  const arr = [];
  const that = this;
  return function _curry(arg) {
    arr.push(arg);
    if (arr.length < numArgs) return _curry;
    return that(...arr);
  };
};

function addThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

const curried3 = addThree.curry(3);
console.log(curried3(5));
console.log("Hi");
curried3(2);
console.log("hello");
console.log(curried3(3));
