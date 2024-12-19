// 1.4 task4
// 1.4 Task 4: Basic Calculations
// Create a simple program with the following functionality:
// 1. Ask for user to input a number.
// 2. Define a secret number.
// 3. Perform and print out basic calculations for that number with the secret number.

process.stdout.write ("Please enter a number: ")
process.stdin.on ("data",function(inputFromUser) {
    let number = Number(inputFromUser)
    let result
    result = number + number
    process.stdout.write (number + " + " + number + " = " + result + "\n")
    result = number - number
    process.stdout.write (number + " - " + number + " = " + result + "\n")
    result = number * number
    process.stdout.write (number + " * " + number + " = " + result + "\n")
    result = number / number
    process.stdout.write (number + " / " + number + " = " + result + "\n")
    result = number % number
    process.stdout.write (number + " % " + number + " = " + result + "\n")
    result = number ++
    process.stdout.write (result + "++ = " + number + "\n")
    result = number --
    process.stdout.write (result + "-- = " + number)
process.exit()
})