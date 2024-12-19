// 3.1 Task 1: Numbers from 0 to 20
// Create a code that prints out numbers from 0 to 20. Use while loop.

process.stdout.write ("Numbers from 0 to 20 are the following:\n")
for ( let i = 0; i <= 20; i++) {
    process.stdout.write (i.toString().trim() + " ")
}