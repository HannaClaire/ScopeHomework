// // var name = 'Jill'

// var secretsFunction = function () {
//     var pinCode = [0, 0, 0, 0] // local scope WITH var
//     console.log('pinCode inside secretsFunction:', pinCode)
//     console.log(name)
//     // lexical scope
// }

// secretsFunction()
// console.log('pinCode outside secretsFunction:', pinCode) 
//ref error, not defined



// var filterNamesByFirstLetter = function (names, letter) {
//     let filteredNames = [];
//     for (let name of names) {
//         if (name[0] === letter) {
//             filteredNames.push(name);
//         } // with let name doesnt exist outside scope
//         console.log(name)
//     }
//     return filteredNames
// }

// let students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
// let filteredStudents = filterNamesByFirstLetter(students, 'A');
// console.log('filteredStudents:', filteredStudents);


//---------------------------------------------------------------------
//let and const are always scoped to the nearest block

let calculateEnergy = function (mass) {
    const speedOfLight = 299792458;
    return mass * speedOfLight ** 2;
}

let energyOfMe = calculateEnergy(75);
console.log('energyOfMe (if I had a mass of 75kg):', energyOfMe);
// -> energyOfMe (if I had a mass of 75kg) 6740663840526132000