// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


// in this we have to create an object in function:

function make_album(artist_name: string, album_title: string, tracks?: number){
    let music_album = {
        artist_name , album_title 
    };
    if (tracks) {
        music_album['tracks']= tracks;
    }
    return music_album;
}
console.log(make_album("First Artist", "First album"))
console.log(make_album("Second Artist", "Second album"))
console.log(make_album("Third Artist", "Third album", 3))