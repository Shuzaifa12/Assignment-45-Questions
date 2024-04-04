/* Q: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

let favorite_fruits = ['Apple','Cherry','Mango'];
if (favorite_fruits.includes('Apple')){
    console.log("You Really like apple ")
}
// this statement will not print because grapes is not in the list.
if (favorite_fruits.includes('grapes')) {   
    console.log("You love grapes ")
}
if (favorite_fruits.includes('Cherry')) {
    console.log(" You really like Cherry. It is good for health.")
}