// Q: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// first method: 
var _name = "Huzaifa";
console.log("\n", "\t", _name);
console.log(_name);
// Second Method:
var n = "\t \n Huzaifa \t \n";
console.log(n);
console.log(n.trim()); // trim keyword use to remove the white spaces.
