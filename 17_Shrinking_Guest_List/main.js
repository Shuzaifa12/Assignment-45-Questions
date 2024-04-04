// Q: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// From Exc 16 we have the following updated array:
var array = ['Moscow', 'Rio', 'Alicia', 'Berlin', 'Professor', 'Denver'];
array.forEach(function (array) {
    console.log("".concat(array, ", I would like to invite you for dinner \n"));
});
console.log("Sorry Guyz I can only invite two people because the dinning table I found is not arrived");
// removing the person who are not invited for dinner:
var name_1 = array.pop();
console.log("".concat(name_1, ", I am sorry you are not invited today"));
var name_2 = array.pop();
console.log("".concat(name_2, ", I am sorry you are not invited today"));
var name_3 = array.pop();
console.log("".concat(name_3, ", I am sorry you are not invited today"));
var name_4 = array.pop();
console.log("".concat(name_4, ", I am sorry you are not invited today"));
// Printing the statement for the person who are still invited:
array.forEach(function (array) {
    console.log("".concat(array, ", You are still invited for dinner today."));
});
// after dinner guest are gone and now no one is there:
array.splice(0, 2);
console.log(" Thank you guyz for having dinner with me ");
console.log(array);
