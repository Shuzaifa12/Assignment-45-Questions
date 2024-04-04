// Q: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// First Method by myself:
let names: string[] = [ "Anas", "Hamza", "Aatis", "Zain"];
for (let i=0; i<names.length; i++)
{
    let message = "How are you ?"
    console.log(names[i],`${message}`)
} 

// Second method by teachers:
let guest: string[] = [ "Anas", "Hamza", "Aatis", "Zain"];
for (let name of guest){
    console.log(`Hello ${name} How are you?`)
}