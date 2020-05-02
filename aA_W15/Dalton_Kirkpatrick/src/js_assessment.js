// Write a function, `longestSymmetricSubstring(string)`, that returns the
// longest substring that is the same forwards and in reverse (for example,
// "abba"). If two substrings are the same length, take the first one.

function longestSymmetricSubstring(string){
    let arr = [];

    for(let i = 0; i < string.length; i++){
        for(let j = 2; j <= string.length - i; j++){
            let slc = string.slice(i, i + j);
            let rev = slc.split('').reverse().join('');
            if(slc === rev) arr.push(slc)
        }
    }
    if(!arr.length){
        return string[0];
    } else {
        return arr[0]
    }
}

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. 
//
// **Do NOT use the built-in `Array.prototype.forEach` method in your 
// implementation.**

Array.prototype.myEach = function(callback){

    for(let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}


// Write an `Array.prototype.myMap(callback)` method, that takes a callback and 
// returns a new array containing the result of the callback for each element in 
// the array. Use the `Array.prototype.myEach` method you defined above. 
//
// **Do NOT call the built-in `Array.prototype.forEach` or `Array.prototype.map` 
// methods in your implementation.**

Array.prototype.myMap = function(callback){
    let arr = [];
    this.myEach((el) => {
        arr.push(callback(el))
    })
    return arr
}


// Write a function `pairMatch(array, callback)`. It should return all pairs
// of indices ([i, j]) for which `callback(array[i], array[j])` returns true.
//
// NB: Keep in mind that the order of the arguments to the callback may matter.
// e.g., callback = function(a, b) { return a < b }

function pairMatch(array, callback) {
    let pairs = [];

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(callback(array[i], array[j]) && i !== j){
                pairs.push([i, j])
            }
        }
    }
    return pairs
}


// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. 
//
// **Do NOT use the built-in `Array.prototype.indexOf` or
// `Array.prototype.includes` methods in your implementation.**
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.

function binarySearch(sortedArray, target){
    if(sortedArray.length === 0) return -1

    let mid = Math.floor(sortedArray.length / 2);
    if(target < sortedArray[mid]){
        return binarySearch(sortedArray.slice(0, mid), target);
    } else if(target === sortedArray[mid]){
        return mid;
    } else {
        let right = binarySearch(sortedArray.slice(mid + 1), target);
        return right === -1 ? -1 : right + mid + 1
    }
}


// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.

Function.prototype.myBind = function(context){
    let bargs = Array.from(arguments).slice(1);
    let that = this;
    return function(...cargs){
        return that.apply(context, bargs.concat(cargs));
    }
}

// Write a function, `inherits(ChildClass, ParentClass)`. It should extend the
// methods of `ParentClass.prototype` to `ChildClass.prototype`. 
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

function inherits(ChildClass, ParentClass){
    function Surrogate(){};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
}


// Write a function `myCurry(fn, object, numArgs)`, that curries the function.
// Remember that a curried function is invoked with one argument at a time. For
// example, the curried form of `sum(1, 2, 3)` would be written as
// `curriedSum(1)(2)(3)`. After `numArgs` have been passed in, invoke the
// original `fn` with the accumulated arguments, using `object` as the
// context.

// function myCurry(fn, object, numArgs) {
//     let arr = [];
//     return function curriedSum(num){
//         arr.push(num)
//         if(arr.length === numArgs){
//             return fn.bind(object, arr)()
//         }
//         return curriedSum
//     }
// }

function myCurry(fn, object, numArgs) {
    let arr = [];
    return function curriedSum(num){
        arr.push(num)
        if(arr.length === numArgs){
            return fn.bind(object)(...arr)
        }
        return curriedSum
    }
}


