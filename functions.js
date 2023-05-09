// function sayHello(name = 'World') {
//     return `Hello World! ${name}`
// }

// // console.log(sayHello()) // Hello World!

// let phrase = sayHello("Alex")

// console.log("Message:", phrase) // Message: Hello Alex


// var add = function(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }
// console.log('1 + 3 =', add(1, 3)) //    1 + 3 = 4

var sum = function(firstNumber, secondNumber, thirdNumber) {
    return firstNumber + secondNumber + thirdNumber

}
console.log(sum(3, 3, 3))






var coffee = {
    brand : 'Machina', 
    roast : 'medium'
}

// var objectHasKey = function (object, searchString) {
//     for (var key of coffee ){
//     if (searchString === key) {
//         return true;
//     }

//     console.log(coffee)


var multiply = (firstNumber, secondNumber) => {////----- arrow function
return firstNumber * secondNumber
}
console.log(multiply(4,5))


var double = number => number * 2 // points at the return value in a single statement