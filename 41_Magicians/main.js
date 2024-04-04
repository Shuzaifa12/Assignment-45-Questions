// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Array:
var Magicians = ['Criss Angel', 'Teller', 'Ricky Jay'];
// Function:
function show_magicians(a) {
    return a;
}
console.log(show_magicians("The following are the three famous Magicians ".concat(Magicians)));
// Second Method:
function Show_magicians(Magicians) {
    Magicians.forEach(function (Magicians) {
        console.log(Magicians);
    });
}
Show_magicians(Magicians);
