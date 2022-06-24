
console.log('Welcome to the Eazy Calculator')
console.log('Specify choices in UPPERCASE')



console.log('Select an operation')
console.log("A - Add")
console.log("S - Subtract")
console.log("D - Divide")
console.log("M - Multiply")
console.log("R - Modulus")

let again = prompt('Would you like to perform an calculatiton? (Y/N): ');

var options = ["A", "S", "M", "D"];

do {
    var operation = prompt('Type in option (A/S/M/D) : ')
    if (options.includes(operation)) {
        var first_num = parseFloat(prompt('Input your first number: '))
        var second_num = parseFloat(prompt('Input your second number: '))
            
            if (operation == 'A') {
                console.log(first_num, "+", second_num, "=", first_num + second_num)
            }
            else if (operation == 'S') {
                console.log(first_num, "-", second_num, "=", first_num - second_num)
            } 
            else if (operation == 'M') {
                console.log(first_num, "*", second_num, "=", first_num * second_num)
            }
            else {
                console.log(first_num, "%", second_num, "=", first_num % second_num);
            }
    } else {
        console.log("Invalid Input")
    }
} while (again === Y)