// 1.2 task2
// 1.2 Task 2: Distance Converter version 0.1
// Create a simple program that converts distance given in miles to
// kilometers. Print out the output with basic write() and also with
// util.format().

const util = require('util')
process.stdout.write ("This program converts miles to Kilometers.\nPlease, give a distance in miles\n")
process.stdin.on ("data",function(inputFromUser) {
    let number = Number(inputFromUser)
    let kilometers = number * 1.60934
process.stdout.write (number + " is " + kilometers + " kilometers")
process.stdout.write (util.format( "\n%d is %d Kilometers",number,kilometers))
process.exit()
})