let numbers = [0, 1, 2, 4, 5, 15, 20, 25, 30];

let counter = 0;

countArray(numbers);

function countArray(num){
    for(let i = 0; i <   numbers.length;i++){
        if(num[i] > 20){
            counter++;
        }
    }
    console.log(counter);
}
/*
let ages = [];

for(let i = 0; i < 20; i++) {
  ages.push( Math.floor(Math.random() * 50 ));
  
  console.log(ages)
}
*/
//log out the contents of ages.. what is in it? (20) [16, 0, 3, 19, 37, 48, 28, 34, 7, 13, 45, 9, 38, 30, 45, 36, 38, 35, 22, 46]

//When a button is pressed
    // loop through the ages
    //add one to age
    //if their age is greater than 55
          // on a 50% chance
          // remove them from the array

                  //(Lookup javascript array splice)

//When a different button is pressed
   // clear out old data in the div
    // write the content of the array to the screen

//when a  third button is pressed

  // add a new age between 1 and 50