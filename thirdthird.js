// 3.3 Task 3: Looping through Strings
// Create a program with the following functionality:
// 1. Ask the user to enter a string.
// 2. Loop through the string and print out the string letter by letter saying “1.
// character is [first letter of given string.]”
//Hint! You might need the following String methods: charAt() and trim() and property length. Check them out in documentation.

process.stdout.write ("Please enter a string\n")
process.stdin.on ("data",function(inputFromUser) {
    let givenstring = inputFromUser.toString().trim()
    for ( let index = 0; index < givenstring.length; index++) {
        process.stdout.write ( (index + 1) + " character is " + givenstring.charAt(index) + "\n")
    }
process.exit()
})