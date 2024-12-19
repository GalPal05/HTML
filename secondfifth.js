// 2.5 Task 5: Logical Operators
// Write a simple program that asks user for three numbers and create the following logic:
// ▪ If all three numbers are equal print out “You entered three matching numbers”.
//▪ If all three numbers are different print out “You entered three different numbers”.
// ▪ If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
// ▪ If any of the numbers is 2, enter “You entered the magic number 2!”.

process.stdout.write ("Please, enter three numbers separated with single space characters : ")
process.stdin.on ("data",function(inputFromUser) {
    let numbersofstring = inputFromUser.toString().trim().split(" ")
    let number1 = Number(numbersofstring[0])
    let number2 = Number(numbersofstring[1])
    let number3 = Number(numbersofstring[2])
    if ( number1 === number2 && number2 === number3) {
        process.stdout.write("You entered three matching numbers\n")
    } if ( number1 !== number2 && number2 !== number3 && number1 !== number3) {
        process.stdout.write ("You entered three different numbers\n")
    } if ( number1 === number2 && number2 !== number3 ) {
        process.stdout.write ("Third one doesn’t fit\n")
    } if ( number1 === 2 || number2 === 2 || number3 === 2) {
        process.stdout.write ("You entered the magic number 2!\n")
    }
process.exit()
})