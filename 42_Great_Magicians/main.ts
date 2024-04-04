// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Array:
let magicians = ['Criss Angel','Teller','Ricky Jay']

// Function:

function Show_magicians(magicians: String[]){
    magicians.forEach(magicians => {
        console.log(magicians);
    })
}


function make_great(magicians: string[]){
    for (let i=0; i<magicians.length; i++){
        magicians[i]="The Great" + " " + magicians[i]  
    }
}
make_great(magicians)
Show_magicians(magicians)