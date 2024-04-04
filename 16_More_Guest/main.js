// Q: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// From Exc 15 we have:
var Guest = ['Rio', 'Berlin', 'Tokyo'];
Guest.forEach(function (Guest) {
    console.log("".concat(Guest, ", I would like to invite you at dinner."));
});
// not coming:
var cannot_join = " Tokyo";
console.log("Sorry Dear I can't join you at dinner today, ".concat(cannot_join));
// Replacing the element
Guest.pop();
// Modifying guest list:
Guest.push("Professor");
// Again sending invitation:
Guest.forEach(function (Guest) {
    console.log("".concat(Guest, ", I would like to invite you at dinner."));
});
var messages = " I have found a bigger table so now I would like to invite three more guest at dinner ";
console.log(messages);
Guest.unshift("Moscow"); // unshift will add element at first
Guest.splice(2, 0, "Alicia"); // splice is used to ad new elements at any place, while 2 indicates the index position to place the element while 0 indicates how many elements you want to remove.
Guest.push("Denver"); // push will append the element at the last
Guest.forEach(function (Guest) {
    console.log("".concat(Guest, ", I would like to invite you at dinner."));
});
console.log(Guest);
