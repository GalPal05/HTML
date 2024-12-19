// 2.4 Task 4: Yes or No
// Write a simple program that asks user a simple yes or no question and prints out a corresponding message. Remember to also handle invalid input.

process.stdout.write ("Are you younger than 18 \nPlease, answer Y or N : ")
process.stdin.on ("data",function(inputFromUser) {
    let number = inputFromUser.toString().trim()
    if ( number == "n" || number == "N" ) {
        process.stdout.write ( "You are grown up" )
    } else if ( number == "y" || number == "Y" ) {
        process.stdout.write ( "You are younger than 18" )
    } else {
        process.stdout.write ( number + " is not a valid input." )
    }
process.exit()
})