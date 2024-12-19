// 3.6 Task 6: Palindrome
// Ask the user to give a string and then check if it’s a palindrome (a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run) or not. Use loops to solve this.
// Note: What happens if madam was spelt with a capital letter?

process.stdout.write("Please enter a string to check if it's a palimdrome\n")
process.stdin.on ("data",function(inputFromUser) {
    let userinput = inputFromUser.toString().trim().toLowerCase().split(" ").join("")
    let ispalindrome = true
    for (let x = 0; x < userinput.length / 2; x++ ) {
        if (userinput[x] !== userinput[userinput.length - 1 - x]) {
            process.stdout.write( "Word " + userinput + " is not a palindrome")
            ispalindrome = false
            break
        }
    } if (ispalindrome) 
        { process.stdout.write("Word " + userinput + "is a palindrome")
    }
process.exit()
})