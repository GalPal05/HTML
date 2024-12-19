// 3.5 Task 5: Countdown
// Print out numbers from 10 to 0 using a loop

process.stdout.write ("10 seconds to ignition... Starting countdown...\n")
for ( let number = 10; number > 0; number--) {
    process.stdout.write ( "..." + number + "...\n")
}
process.stdout.write ("IGNITION!!!\n")

for ( let number = 1; number < 11; number++) {
    process.stdout.write ("..." + number + "...\n")
}