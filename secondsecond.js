// 2.2 Task 2: Largest Number v.0.2
// Extend the program from previous task to ask for three numbers.

process.stdout.write ("This program can find the largest of three numbers you enter from the keyboard. Please, enter three numbers separated with single space characters : ")
process.stdin.on ("data",function(inputFromUser) {
    let numbersofstring = inputFromUser.toString().trim().split(" ")
    let number1 = Number(numbersofstring[0])
    let number2 = Number(numbersofstring[1])
    let number3 = Number(numbersofstring[2])
    if ( number1 > number2 && number1 > number3) {
        process.stdout.write ("The largest number is " + number1)
    } if ( number2 > number1 && number2 > number3) {
        process.stdout.write ("The largest number is " + number2)
    } if ( number3 > number1 && number3 > number2) {
        process.stdout.write ("The largest number is " + number3)
    }
    process.exit()
})