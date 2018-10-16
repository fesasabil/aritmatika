function Aritmatika(arr) {
var matik = arr.slice(-1).pop() - arr.slice(-2,-1).pop();
var arit = true;

for(var i = arr.length-1; i > 0; i--) {
    if (matik !== (arr[i] - arr[i-1])) {
    arit = false;
}
}

    return arit;
}

console.log(Aritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(Aritmatika([2, 4, 6, 12, 24])); // false
console.log(Aritmatika([2, 4, 6, 8])); // true
console.log(Aritmatika([2, 6, 18, 54])); // false
console.log(Aritmatika([1, 2, 3, 4, 7, 9])); // false