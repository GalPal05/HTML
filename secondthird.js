// 2.3 Task 3: Even or Odd
// Write a simple program to figure out whether a given number is even or odd.
// Hint! You can use modulo (%) to achieve this.

process.stdout.write("This program can find out whether a number is even or odd. Please, give a number: ")
process.stdin.on ("data",function(inputFromUser) {
    let number = Number(inputFromUser)
    if ( number %2 === 0 ) {
        process.stdout.write ( number + " is even.")
    } else { process.stdout.write ( number + " is odd.")}
process.exit()
})