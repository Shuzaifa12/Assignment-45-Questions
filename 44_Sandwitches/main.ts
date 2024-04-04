// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwitch(...items: string []){
    console.log(`Make a sandwitch with: ${items.join(',')}.`);
}

make_sandwitch("ham","chease");
make_sandwitch("turkey", "lettuce","tomatto");
make_sandwitch("avocado","sprouts","mustard","mayo");