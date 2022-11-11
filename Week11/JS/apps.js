/*
Create an application that:

Takes in a list of comma-separated numbers from the user
Splits that list into an array of numbers
Converts the string version of the numbers into number versions
Loops through the array and sums up the values
Calculates the average of the array
Displays to the user
The average
The sum
Removes the text from the input so the user can type in new numbers
*/
let numbers;
let sum;
let average;
let h1 = document.getElementById("h1");

function check() {
    let num = document.getElementById("txt").value;
    numbers = num.split(",");
    console.log(numbers);
    getSum();
}

function getSum() { //haha get sum get it hahahahaaa...
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]);
        sum = sum + numbers[i];
    }
    console.log(sum);
    avg();
}

function avg() {
    average = 0;
    average = sum / numbers.length;
    console.log(average);
    h1.innerHTML = "The sum is: " + sum + " and the average is: " + average;
    document.getElementById("txt").value = "";
}