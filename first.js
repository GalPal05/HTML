// 1.1 task1
// 1.1 Task 1: Number Guessing Game
// Create a simple game in which the user has to guess the secret number. Game has the following
// functionality:
// 1. Program asks the user to enter a number.
// 2. Set secret number to be entered number plus one.
// 3. Print out whether the user won or not.

process.stdout.write ("This program is a computer games. Please type in a number\n");
process.stdin.on ("data", function(inputFromUser) {
    let number = Number(inputFromUser)
    let number1 = number + 1
process.stdout.write ("You typed in " + number + "\nMy number is " + number1 + "\nSorry, you lost. I won. The game is over")
process.exit()
})