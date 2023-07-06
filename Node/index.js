const colors = require("colors")

// console.log('Hi Abi!')

// console.log('Hello World!'.rainbow)

// https://www.npmjs.com/package/colors

// print 3 lines
// one with coloured text
// one with coloured background
// one with both text and background

console.log("My name is Abi".green)
console.log("I have a horse called Mitse".bgGreen)
console.log("I really want a ".yellow + "cat!".bgRed)


// print 1 - 100 with random colours

Array.from({length: 100},(_,x) => console.log(colors.random(`${x+1}`))) 

// remake fizzbuzzzing but..
// mutltiple of 3 says fizz in red
// mutltiple of 5 says buzz in green
// mutltiple of 7 says zing in blue
// if it is the multiple of mutliple combine the words

for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) console.log("Fizz".red + "Buzz".green + "Zing".blue);
    else if (i % 3 == 0 && i % 5 == 0) console.log("Fizz".red + "Buzz".green);
    else if (i % 5 == 0 && i % 7 == 0) console.log("Buzz".green + "Zing".blue);
    else if (i % 3 == 0 && i % 7 == 0) console.log("Fizz".red + "Zing".blue);
    else if(i % 3 == 0) console.log("Fizz".red);
    else if (i % 5 == 0) console.log("Buzz".green);
    else if (i % 7 == 0) console.log("Zing".blue);
    else console.log(i)
}

// single player rock paper scissors
// Math.random() for computer
// prompt-sync is the module name for inputs https://www.npmjs.com/package/prompt-sync
// ext add colour
// add lizard and spock



// const promptSync = require('prompt-sync');

// const prompt = promptSync();

// let n = prompt('How many more times? ');

