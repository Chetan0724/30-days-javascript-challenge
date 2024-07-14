let a = 8
let b = 6

let sumResult = a + b
console.log(sumResult)

let subResult = b - a
console.log(subResult)

let multiResult = a * b
console.log(multiResult)

let diviResult = a / b
console.log(diviResult)

let c = 5
c += 6
console.log(c)

c -= 3
console.log(c)

console.log(5 > 6)
console.log(5 < 6)

console.log(5 <= 5)
console.log(8 >= 15)

console.log(5 == 5)
console.log(5 === 5)
console.log(5 == "5")
console.log(5 === "5")

console.log(5 > 4 && 6 <= 8)
console.log(10 == 4 || 7 < 16)
console.log(!(5 >= 8))

let numb = -7
let result = numb >= 0 ? "Positive" : "Negative"
console.log(result);

let myValue = 55
myValue = 54
console.log(myValue)

// *Feature Request 1*

function operat(num1, num2) {
    console.log(`Addition of two numbers is ${num1 + num2}`)
    console.log(`Subtraction of two numbers is ${num1 - num2}`)
    console.log(`Multiplication of two numbers is ${num1 * num2}`)
    console.log(`Division of two numbers is ${num1 / num2}`)
    console.log(`Remainder is ${num1 % num2}`)
}

operat(5, 4)

// *Feature Request 2*

function comNums(num1, num2) {
    console.log(num1 > num2)
    console.log(num1 < num2)
    console.log(num1 >= num2)
    console.log(num1 <= num2)
    console.log(num1 == num2)
    console.log(num1 === num2)
    console.log(num1 != num2)
    console.log(num1 == num2 && num1 == 5)
    console.log(num1 >= 5 || num2 < 8)
}

comNums(5, 6)

// *Feature Request 3*

function findPosNeg(num) {
    return ans = num >= 0 ? "Positive" : "Negative"
}

console.log(findPosNeg(5))
console.log(findPosNeg(-5))