// 1.3 task3
// 1.3 Task 3: Distance Converter version 0.2
// Extend the functionality from the previous task to:
// 1. Ask for the distance in meters.
// 2. Also convert the distance to following units:
// o kilometers
// o miles
// o yards
// o feet
// o inches
// o light years
// 3. Show numbers with three decimals.
// Hint! If you want to align the results, you can use padStart() function to add empty spaces to make the
// string equal length. (OPTIONAL)

process.stdout.write ("This program converts meters to other units of distance. Please, enter a distance in meters:\n")
process.stdin.on ("data",function(inputFromUser) {
    let number = Number(inputFromUser)
    let result
    result = number / 1000
    process.stdout.write (result.toFixed(3).padStart(10, ' ') + " Kilometers\n")
    result = number / 1609.34
    process.stdout.write (result.toFixed(3).padStart(10, ' ') + " miles\n")
    result = number * 1.09361
    process.stdout.write ( result.toFixed(3).padStart(10, ' ') + " yards\n")
    result = number * 3.28084
    process.stdout.write (result.toFixed(3).padStart(10, ' ') + " feet\n")
    result = number * 39.3701
    process.stdout.write (result.toFixed(3).padStart(10, ' ') + " inches\n")
    result = number / 299792458
    process.stdout.write (result.toFixed(3).padStart(10, ' ') + " light years")
process.exit()
})