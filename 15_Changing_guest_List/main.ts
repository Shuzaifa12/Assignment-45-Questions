// Q: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

// From Exc 14 we have:
let Guest = [ 'Rio','Berlin','Tokyo']
Guest.forEach(Guest=>{
    console.log(`${Guest}, I would like to invite you at dinner.`)
})
// not coming:
let cannot_join =" Tokyo"
console.log(`Sorry Dear I can't join you at dinner today, ${cannot_join}`)

// Replacing the element
Guest.pop()

// Modifying guest list:
Guest.push("Professor");

// Again sending invitation:
Guest.forEach(Guest=>{
    console.log(`${Guest}, I would like to invite you at dinner.`)
})
