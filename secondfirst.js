// 2.1 Task 1: Largest Number v.0.1
// Create a simple program in which the user is asked to give two numbers and then
// your program prints out which one of them is largest.

process.stdout.write ("This program can find the largest of two numbers you enter from the keyboard. Please, enter two numbers separated with single space characters : ")
process.stdin.on ("data",function(inputFromUser){
    let numbersInString = inputFromUser.toString().split(" ")
    let number1 = Number(numbersInString[0])
    let number2 = Number(numbersInString[1])
    if ( number1 > number2) {
        process.stdout.write ("The largest number is " + number1)
    } if (number2 > number1) {
        process.stdout.write ("The largest number is " + number2)
    }
    process.exit()
})
