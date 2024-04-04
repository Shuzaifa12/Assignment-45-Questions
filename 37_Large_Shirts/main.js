// Q: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// From exc 36:
function mod_make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("The size of the t-shirt is ".concat(size, ", with a default message ").concat(message, "."));
}
mod_make_shirt();
mod_make_shirt("Medium");
mod_make_shirt("Small", "Game Of Thrones");
