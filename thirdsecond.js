// 3.2 Task 2: Numbers from 0 to 20
// Create the same functionality but this time use Do-while loop.

process.stdout.write ("Numbers from 0 to 20 are the following:\n")
let i = 0
do {
    process.stdout.write(i.toString().trim() + " ")
} while ( i++ < 20)