// Q: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// First Method by myself:
var names = ["Anas", "Hamza", "Aatis", "Zain"];
for (var i = 0; i < names.length; i++) {
    var message = "How are you ?";
    console.log(names[i], "".concat(message));
}
// Second method by teachers:
var guest = ["Anas", "Hamza", "Aatis", "Zain"];
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var name_1 = guest_1[_i];
    console.log("Hello ".concat(name_1, " How are you?"));
}
