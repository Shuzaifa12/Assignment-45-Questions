// Q: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
/* • Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
// Equality & Inequaility:
var number = 5;
console.log("Predict True = ", number == 5);
console.log("Predict False = ", number != 5);
// Upper & Lower case function:
var Upper = "Huzaifa";
console.log("Result will be false because the text is in title case=", Upper == Upper.toUpperCase());
console.log("Result will be false because the text is in title case=", Upper == Upper.toLowerCase());
// Numerical Operators:
var a = 10, b = 15;
console.log("The ans will be false ", a > b);
console.log("The ans will be true ", a < b);
console.log("The ans will be false ", a == b);
console.log("The ans will be true ", a != b);
// And , OR Operator:
var c = 15, d = 10;
console.log("The ans will be false ", (d > c) && (d < c));
console.log("The ans will be true ", (c > d) || (d > c));
// Item in array:
var item = ['apple', 'mango', 'banana', 'grapes'];
console.log("Item is present :", item.includes('mango'));
// Item not in array:
console.log(" item is not present :", item.includes('peach'));
