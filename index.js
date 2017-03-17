function countdown(fn){
  setTimeout(fn, 2000);
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function createMultiplier(multiplierValue){
  return function (value) {
    return value*multiplierValue;
  }
}

function multiplier(num1, num2){
  num1*num2
}

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)
