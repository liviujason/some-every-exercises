function hasOddNumber(arr) {
   return arr.some(function(number) {
      return (number % 2 === 1);
   });
};


function hasAZero(number) {
return number.toString().split('').some(function(num) {
      return num === '0';
   });
}

function hasOddNumber(arr) {
   return arr.every(function(number) {
      return (number % 2 === 1);
   });
};

function hasNoDuplicates(arr) {
   return arr.every(function(dup) {
      return arr.indexOf(dup) === arr.lastIndexOf(dup);
   });
}

function hasCertainKey(arr, key) {
   return arr.every(function(item) {
      return key in item
   });
}

function hasCertainValue(arr, key, val) {
   return arr.every(function(val) {
      return val[key] === val;
   });
}
