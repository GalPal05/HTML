// 3.4 Task 4: Multiplication Table
// Ask the user to enter a number and then print out corresponding multiplication table using a loop.
// Optional: Try to make printing according to screenshot on the right. You might use
// util.format, padStart() and padEnd() to achieve this.

const util = require("util");

process.stdout.write("Please enter a number: ");
process.stdin.on("data", function (inputFromUser) {
    let givenNumber = Number(inputFromUser.toString().trim());
    process.stdout.write("Multiplication table for " + givenNumber + "\n");
    process.stdout.write("*".padStart(30, "*") + "\n");
    for (let x = 1; x <= 10; x++) {
        let result = givenNumber * x;
        process.stdout.write(util.format("*%s * 3 = %s*\n", x.toString().padStart(10, " "), result.toString().padEnd(10," ")));
    }
    process.stdout.write("*".padEnd(30, "*") + "\n");
    process.exit();
});


process.stdout.write ("Please enter a number: ")
process.stdin.on ("data",function(inputFromUser) {
    let givenNumber = Number(inputFromUser.toString().trim())
    process.stdout.write ("Multiplication table for " + givenNumber + "\n")
    process.stdout.write ("*".padStart(30,"*") + "\n")
    for ( let x = 1 ; x <= 10; x++) {
        let result = givenNumber * x
        process.stdout.write ("*" + x.toString().padStart(10," ") + " * 3 = " + result.toString().padEnd(10," ") + "*" + "\n")
    }
    process.stdout.write ("*".padEnd(30,"*") + "\n")
process.exit()
});