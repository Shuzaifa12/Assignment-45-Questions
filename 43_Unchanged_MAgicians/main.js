// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ['Criss Angel', 'Teller', 'Ricky Jay'];
function Show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, ", The Great "));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice());
console.log("Original Magicians:");
Show_magicians(magicians);
console.log("Great Magicians:");
Show_magicians(greatMagicians);
