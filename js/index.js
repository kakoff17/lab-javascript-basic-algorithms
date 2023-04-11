// Iteration 1: Names and Input

let hacker1 = "Carlos"
console.log(`The driver name is ${hacker1}`)

let hacker2 = "Antonio"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const lengthHacker1 = hacker1.length
const lengthHacker2 = hacker2.length

if (lengthHacker1 > lengthHacker2){
    console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`)
}
else if (lengthHacker1 < lengthHacker2){
    console.log(`It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`)
}
else {
    console.log(`Wow, you bouth have equally long names, ${lengthHacker1} characters!`)
}

// Iteration 3: Loops

let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedName = spacedName + hacker1[i].toUpperCase() + " ";
}
console.log(spacedName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName = reversedName + hacker2[i];
}
console.log(reversedName);

// he tenido que buscar como comparar los textos para el 3.3


if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
    } 
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
    } 
else {
    console.log("What?! You both have the same name?");
    }