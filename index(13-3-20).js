// In this file we covered the topics related to "if-else , Ternary Operator
// logical operators & Arrays Methods"

//1

// var num1 = +prompt("Enter Fisrt Number");
// var operator = prompt("Enter operator");
// var num2 = +prompt("Enter second Number");
// console.log(num1 + operator + num2);
// if (operator === "+") {
//   document.write(num1 + num2);
// }
// else if (operator === "-") {
//   document.write(num1 - num2);
// }
// else if (operator === "*") {
//     document.write(num1 * num2);
// }
// else if (operator === "/") {
//     document.write(num1 / num2);
// }
// else if (operator === "%") {
//     document.write(num1 % num2);
// }


//2

/** Logical operators **/

// AND - &&
// OR - ||
// NOT - !

//true && true   = true
//false && true  = false
//false && false = false
//true && false  = false

//true || true   = true
//false || true  = true
//false || false = false
//true || false  = true


//3

// var time = parseInt(prompt("Enter time in 24 hour format E.g. 1300 for 1pm", "1300"));
// if (time >= 0000 && time < 1200) {
//     message = "Good morning!";
// } else if (time >= 1200 && time < 1700) {
//     message = "Good afternoon!";
// } else if (time >= 1700 && time < 2100) {
//     message = "Good evening!";
// } else if (time >= 2100 && time <= 2359) {
//     message = "Good night!";
// }
// alert(message);


//4

/** Ternary Operator **/

// var isConfirmed = true;
// var status;
// if (isConfirmed == true) {
//     status = "Confirmed";
// }
// else {
//     status = "Pending";
// }
// alert(status)
// status = isConfirmed == true ? "Confirmed" : "Pending";
// alert(status)


//Array (All Methods)


//5 

// var mixedArray = [123, "Arsalan", "Developer", true];
// alert(mixedArray[1]) // Arsalan

//6

// var fruits = [];
// // Array fruits has already been declared.This is how you assign values to
// // it.
// fruits[0] = "Mango";
// fruits[1] = "Peach";
// fruits[2] = "Banana";
// // Now, if you refer to fruits[0], you'll get "Mango". If you refer to fruits[2], you'll get
// // "Banana".But if you refer fruits[4], fruits[5] you'll get undefined.
// alert(fruits[0]) // Mango
// alert(fruits[1]) // Peach
// alert(fruits[6]) // undefiend






// 7

// Adding and removing elements
// Removing, inserting, and extracting elements


// push      = Add an element to end of an array
// pop       = Removes last element of an array
// unshift   = Add an element to start of an array
// shift     = Removes first element of an array
// splice    = Add/Remove array elements at/from any position
// slice     = copy an array
// indexOf   = find index or position of a specific element

//8

// /** push **/
// Using the keyword, push, you can add one or more elements to the end of an array
// var fruits = ["Mango", "Peach", "Banana"];
// document.write("<br><h4>push</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.push("Apple");
// document.write("<br>Fruits: " + fruits);

// fruits.push("Water Melon", "Grapes", "Melon");
// document.write("<br>Fruits: " + fruits);

// fruits.push("Grapes");
// document.write("<br>Fruits: " + fruits);
// document.write("<br>Total fruits " + fruits.length);


//9

// /** an alternate way to push in an array **/
// var fruits = ["Apple", "Orange"];
// document.write("<br>Fruits: " + fruits+"<br />");
// document.write(fruits.length)

// fruits[fruits.length] = "Mango";
// fruits[fruits.length] = "Banana";
// document.write("<br>Fruits: " + fruits);





//10

// /** pop **/
// Use the pop method to remove an element from the end of the array.
// var fruits = ["Mango", "Peach", "Banana", "Apple", "Grapes", "Melon"];
// document.write("<br><h4>pop</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.pop();
// document.write("<br>Fruits: " + fruits);

// fruits.pop();
// fruits.pop();
// document.write("<br>Fruits: " + fruits);





//11


// /** unshift **/
// Using the keyword, unshift, you can add one or more elements to the beginning of an array
// var fruits = ["Mango", "Peach", "Banana"];
// document.write("<br><h4>unshift</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.unshift("Apple");
// document.write("<br>Fruits: " + fruits);

// fruits.unshift("Water Melon", "Grapes", "Melon");
// document.write("<br>Fruits: " + fruits);

// fruits.unshift("Grapes");
// document.write("<br>Fruits: " + fruits);
// document.write("<br>Total fruits " + fruits.length);




//12



// /** shift **/
// Use the shift method to remove an element from the beginning of an array.
// var fruits = ["Mango", "Peach", "Banana", "Apple", "Grapes", "Melon"];
// document.write("<br><h4>shift</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.shift();
// document.write("<br>Fruits: " + fruits);

// fruits.shift();
// fruits.shift();
// document.write("<br>Fruits: " + fruits);
// console.log(fruits);



//13





// /** splice **/
// The splice method to insert and remove one or more elements anywhere in an array
// /*
//     fruits.splice(index, noOfElementsToRemove, elementsToAdd);
// 
// var fruits = ["Mango", "Grapes", "Peach", "Banana","Papaya"];
// document.write("<br><h4>splice</h4>");
// document.write("<br>Fruits: " + fruits + "<br />");

// fruits.splice(2, 1);
// document.write("<br>Remove Fruit(s): " + fruits + "<br />");

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// fruits.splice(2, 0, "Apple");
// document.write("<br>Add Fruit(s): " + fruits);

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// fruits.splice(2, 0, "Apple", "Orange", "Melon");
// document.write("<br>Add Multiple Fruits: " + fruits);

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// document.write("<br>Fruits: " + fruits + "<br />");
// fruits.splice(2, 1, "Apple");
// document.write("<br>Add & Remove Fruit(s): " + fruits);





//14




// /** slice **/
// The slice method to copy one or more consecutive elements in any position and put
// them into a new array
// /*
//  fruits.slice(startIndex, endIndex+1);
//  */
// var fruits = ["Mango", "Grapes", "Peach", "Banana", "Orange"];
// document.write("<br><h4>slice</h4>");
// document.write("<br>Fruits: " + fruits);

// var copyFruits = fruits.slice(0, 2);
// document.write("<br>Copy Fruit(s): " + copyFruits);




//15


// /** indexOf **/
// var fruits = ["orange", "banana", "apple"];
// alert(fruits.indexOf("banana"));    // 1
// alert(fruits.indexOf("apple"));     // 2
// alert(fruits.indexOf("peach"));     // -1



//16




// /** multidimensional array **/
// var multi = [[], [], []];
// alert(multi.length); //3
// var multi = [[1, 2], [3, 4], [5, 6]];
// alert(multi.length);    // 3
// alert(multi[0]);        // 1,2
// alert(multi[1]);        // 3,4
// alert(multi[2]);        // 5,6
// alert(multi[0].length); // 2
// alert(multi[0][0]); // 1
// alert(multi[0][1]); // 2
// alert(multi[1][0]); // 3
// alert(multi[1][1]); // 4
// alert(multi[2][0]); // 5
// alert(multi[2][1]); // 6


//17


// var pets = ['dog', 'cat' , 'bird' , 'lizard', 'fish' ,'gerbil', 'snake'];
// pets.shift('cat');
// console.log(pets);
// pets.unshift('deer', 'snake','monkey');
// pets.splice(2 , 1) // startingindex, numberofElementToRemove, ""
// var removePets = pets.splice(2, 1) // startingindex, numberofElementToRemove, ""
// pets.push("abc"); // 2 + 1 // 3
// pets.push("abc"); // 2 + 1 // 3
// var lastElement = pets.push("abc"); // 2 + 1 // 3
// console.log(pets);

// console.log(lastElement)
// console.log(removePets);
// var copyPets = pets.slice(2);
// console.log(copyPets)
// pets.push('cat')
// console.log(pets);

