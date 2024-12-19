// 2.6 Task 6: Switch Menu
//Create a program with a simple menu and following functionality:
// 1. Print hello
// 2. Print current date
// 3. End program
// Remember to check invalid input, too.
// Hint! Use switch for this

process.stdout.write("Please select what you want to do:\n1 - Print out hello\n2 - Print out current date & time\n0 - Exit\n")
process.stdin.on("data",function(inputFromUser) {
    let number = Number(inputFromUser)
    switch (number) {
        case 1:
            process.stdout.write ("hello\n")
            break
        case 2:
            process.stdout.write ("Current date & time: " + new Date().toString() + "\n")
            break
        case 0:
            process.exit()
        default:
            process.stdout.write ("this input is not valid\n")
            break;
    }
})