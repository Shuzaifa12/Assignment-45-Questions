// Q: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// From exercise 30:
let user_names: string[]= ["Admin", "Huzaifa", "Aleezay", "Lisa", "Furqan"]
user_names.splice(0,5)
if (user_names.length == 0){
    console.log("We need to find some users.");
}
else{
    console.log("There are five users in the list.");
}