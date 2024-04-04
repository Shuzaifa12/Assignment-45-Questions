// Q: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places : string [] = ['Dubai','Russia','Turkey','Italy','Canada']
console.log("Original Order :",places)     // 1) Original form
console.log("Alphabetic Order :", [...places].sort())      // 2) sort function is used for Alphabetical order. these 3 dots are used to deconstruct the array into variables and known as spread syntax/operator.
console.log("Original Order :", places)     // still original order
console.log("Reverse order :", [...places].sort().reverse())    // first make in alphabetic order again by sort function and then reverse it
console.log("Again Original order :", places) // again original form
console.log("Reverse list :", places.reverse()) // reverse order in non alphabetic form
console.log(" Again Reverse :", places.reverse())   // reverse back in original form
console.log("Sorted in Alphabetic form :",places.sort())    //again in alphabetic order
console.log("Reverser Alphabetic order :", places.reverse())    // again in reverse alphabetic order