var totalStudents = 30
console.log(totalStudents)

let instructorName = "Hitesh"
console.log(instructorName)

const reviseJs = true;
console.log(reviseJs)

let totalMembers = 5
console.log(typeof totalMembers)

let playerName = "Virat Kohli"
console.log(typeof playerName)

let playedCricket = false;
console.log(typeof playedCricket)

const characInfo = {
    name: "Jethalal",
    "full name": "Jethalal Gada",
    age: 35,
    KnowSinging: false,
}
console.log(typeof characInfo)

let mixedArray = ["Sachin", 45, true]
console.log(typeof mixedArray)

let oldName = "Iyer"
console.log(oldName)
oldName = "Idli"
console.log(oldName)

const totalAmount = 1000
console.log(totalAmount)
// totalAmount = 5000
// TypeError --> Assignment to constant variable

// *Feature Request 01*

let myName = "Chetan"
console.log(`My name is ${myName} and the datatype of myName is ${typeof myName}`)

let rollNum = 54
console.log(`My Roll no. is ${rollNum} and the datatype of rollNum is ${typeof rollNum}`)

let ans = true
console.log(`The ans is ${ans} and the datatype of ans is ${typeof ans}`)

let badaNumber = 523482317924n
console.log(`The badaNumber is ${badaNumber} and the datatype of badaNumber is ${typeof badaNumber}`)

// let friendName;
let friendName = undefined
console.log(`My friend's name is ${friendName} and the datatype of friendName is ${typeof friendName}`)

let tempOfContainer = null
console.log(`The Temperature of container is ${tempOfContainer} and the datatype of tempOfContainer is ${typeof tempOfContainer}`)

let mySymbol = Symbol('newSymbol')
// console.log(`The Value of mySymbol is ${mySymbol} and the datatype of mySymbol is ${typeof mySymbol}`)
// TypeError: Cannot convert a Symbol value to a string
console.log(`The Value of mySymbol is ${mySymbol.toString()} and the datatype of mySymbol is ${typeof mySymbol}`);
console.log(mySymbol)
console.log(typeof mySymbol)

let mixedArrayTwo = ["Bhide", 12, false, undefined]
console.log(mixedArrayTwo)
console.log(typeof mixedArrayTwo)

let userDetails = {
    "user name": "Champaklal",
    age: 60,
}
console.log(userDetails)
console.log(typeof userDetails)

function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3
}
console.log(addThreeNumbers(5, 4, 3))
console.log(typeof addThreeNumbers)

// *Feature Request 02*

let noOfEnrollmentsInBatchOne = 45
console.log(noOfEnrollmentsInBatchOne)
noOfEnrollmentsInBatchOne = 50
console.log(noOfEnrollmentsInBatchOne)

const noOfEnrollmentsInBatchTwo = 45
console.log(noOfEnrollmentsInBatchTwo)
// noOfEnrollmentsInBatchTwo = 50
// TypeError: Assignment to constant variable.