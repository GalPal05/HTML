function areaOfACircle(radius) {
    let area = Math.PI * radius * radius
    console.log(area)
};

function calculate(number1, number2, calculation) {
    let result;
    if ( calculation === '+' ) {
        result = number1 + number2        
    } else if ( calculation === '-' ) {
        result = number1 - number2
    } else if ( calculation === '*' ) {
        result = number1 * number2
    } else if ( calculation === '/' ) {
        if ( number2 === 0 ) {
        result = "error"
        } else {
            result = number1/number2
        }
    }
    console.log(result)
};

function highestAndLowest(array) {
    let highest = Math.max(...array)
    let lowest = Math.min(...array)
    process.stdout.write (highest + " is highest and " + lowest + " is lowest")
    // o tambien puede ser mas directo, sin necesidad de agregar variables, con :
    // process.stdout.write(Math.max(...array) + " is highest and " + Math.min(...array) + " is lowest\n")
};

function countDigits(number) {
    let x = number.toString().length
    console.log(x)
};

const correct_username = "Username";
const correct_password = "Password";

function login(username, password) {
    if (username.toLowerCase() === correct_username.toLowerCase() && password === correct_password) {
        process.stdout.write("You are logged in\n");
    } else {
        process.stdout.write("Invalid credentials\n");
    }
};

function getImportantInformation(text) {
    const startIndex = text.indexOf("*IMPORTANT");
    if (startIndex === -1) return "";
    const endIndex = text.indexOf("*", startIndex + 1);
    if (endIndex === -1) return text.substring(startIndex + 12);
    return text.substring(startIndex + 12, endIndex).trim();
};

function areaOfACircle(radius) {
    if (typeof radius !== 'number' || radius < 0) {
        return "Invalid input";
    }
    let area = Math.PI * radius * radius;
    return area.toFixed(2);
};