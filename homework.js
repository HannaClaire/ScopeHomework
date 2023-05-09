// 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function () {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

/////// Miss Scarlett - because 'Miss Scarlett' is the value of the key murderer, and the function is returning the value of that key within the scenario . 
// // //------------------------------------------------------------------------- 2
// const murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//////// as murderer is a const it wouldnt change, so it would stay as professor plum (original thought)
//// 'type error' upon terminalling it as the const variable couldnt be changed

//---------------------------------------------------------------------

//3

// let murderer = 'Professor Plum';

// const declareMurderer = function () {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);


////// The firstVerdict would be Mrs Peacock as that is the murderer declared within the scope of the declareMurderer function, but has its variable of firstVerdict in global scope, and so is accessible, and the secondVerdict would have Professor Plum as it is within the global scope and finds the murderer of 'Professor Plum. 

//----------------------------------------------------------------------
//4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function () {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

///// It would first return the first two suspects as declared and then the third as colonel mustard as the function can see inside AND outside of its own block. It would then print 'Suspect three is Mrs peacock' as it only sees any declarations outwith the function.

//above was my initial understanding, but with further investigation learned that the reason it would be colonel mustard is because the variable of 'suspects' is accessed in global scope, despite having the variable of suspectThree re-defined within the function scope. I think?


/////------------------------------------------------------------------

//5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function (newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function () {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);



/// The verdict would return 'The weapon is the revolver', as despite being a const, its only the properties that are being required to change?

//////---------------------------------------------------------------

//6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


////// The verdict would print colonel mustard as the murderer, as it can only see the global scope as the other murderers are within their own function block

///// on further  i learned this is wrong, and that it is mrs white because plotTwist() is called within the scope of changeMurderer function. Still a bit confused on this though.

//------------------------------------------------------------------------

//7

// let murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function () {
//             murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


/////////// The verdict would be Mr green as it is changed in the changeMurderer function, and as it is initially a 'let' it is able to be changed, and the function can see outside of itself?
//on further look i see its more as a result of col mustard being immediately overturned by miss scarlet, but miss scarlett is within its own block.


///--------------------------------------------------------------------
// 8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function () {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function (room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function (murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function () {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);


/////// Because the murderer strict-equals to murderer, it means the weapon was sucessfully chnaged to candle stick


// ---------------------------------------------------------------------
//9


// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

////// The verdict would be Mrs Peacock the original murderer strict equals to prof plum, which in turn allows for the change of murderer.


//// ^^^^ was my original thought, until i realised the 'let' in the if statement block is deterring it from being changed to mrs peacock.